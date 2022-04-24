import Parser from "rss-parser";
import { parse as parseHTML } from "node-html-parser";

export type Presentation = {
  id: string;
  title: string;
  url: string;
  iframeUrl: string;
  publishedDate: string;
};

export const getPresentations = async (first = 5): Promise<Presentation[]> => {
  const parser = new Parser();
  const feed = await parser.parseURL("https://speakerdeck.com/utgwkk.atom");

  const presentations = feed.items
    .map((item) => {
      return {
        id: item.id,
        title: item.title,
        url: item.link,
        publishedDate: item.pubDate,
      };
    })
    .slice(0, first);

  const iframeUrls = await Promise.all(
    presentations.map(async (presen) => {
      const reqUrl = `https://speakerdeck.com/oembed.json?url=${encodeURIComponent(
        presen.url
      )}`;
      const resp = await fetch(reqUrl);
      const json = await resp.json();
      const html = parseHTML(json.html);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return html.querySelector("iframe")!.getAttribute("src");
    })
  );
  console.log(iframeUrls);

  return presentations.map((p, i) => ({ ...p, iframeUrl: iframeUrls[i] }));
};
