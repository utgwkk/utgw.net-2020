import { http, HttpResponse } from "msw";

const MOCK_ATOM_FEED = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Speaker Deck - Presentations by utgwkk</title>
  <id>https://speakerdeck.com/utgwkk</id>
  <entry>
    <id>https://speakerdeck.com/utgwkk/mock-presentation-1</id>
    <title>Mock Presentation 1</title>
    <link rel="alternate" type="text/html" href="https://speakerdeck.com/utgwkk/mock-presentation-1"/>
    <published>2024-01-01T00:00:00Z</published>
    <updated>2024-01-01T00:00:00Z</updated>
  </entry>
  <entry>
    <id>https://speakerdeck.com/utgwkk/mock-presentation-2</id>
    <title>Mock Presentation 2</title>
    <link rel="alternate" type="text/html" href="https://speakerdeck.com/utgwkk/mock-presentation-2"/>
    <published>2024-02-01T00:00:00Z</published>
    <updated>2024-02-01T00:00:00Z</updated>
  </entry>
  <entry>
    <id>https://speakerdeck.com/utgwkk/mock-presentation-3</id>
    <title>Mock Presentation 3</title>
    <link rel="alternate" type="text/html" href="https://speakerdeck.com/utgwkk/mock-presentation-3"/>
    <published>2024-03-01T00:00:00Z</published>
    <updated>2024-03-01T00:00:00Z</updated>
  </entry>
</feed>`;

export const handlers = [
  http.get("https://speakerdeck.com/utgwkk.atom", () => {
    return new HttpResponse(MOCK_ATOM_FEED, {
      headers: { "Content-Type": "application/atom+xml; charset=utf-8" },
    });
  }),

  http.get("https://speakerdeck.com/oembed.json", ({ request }) => {
    const url = new URL(request.url);
    const presentationUrl = url.searchParams.get("url") ?? "";
    const slug = presentationUrl.split("/").pop() ?? "mock";
    return HttpResponse.json({
      html: `<iframe src="/mock-presentation?id=${slug}" allowfullscreen="true"></iframe>`,
    });
  }),
];
