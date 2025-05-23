import React from "react";

interface Account {
  title: string;
  id: string;
  url?: string;
  rel?: string;
}

const accountList: Account[] = [
  { title: "Twitter", id: "@utgwkk", url: "https://twitter.com/@utgwkk" },
  { title: "GitHub", id: "@utgwkk", url: "https://github.com/utgwkk" },
  {
    title: "Hatena",
    id: "utgwkk",
    url: "https://profile.hatena.ne.jp/utgwkk/",
  },
  { title: "Tumblr", id: "@utgwkk", url: "https://tumblr.utgw.net/" },
  { title: "SlideShare", id: "utgw", url: "https://www.slideshare.net/utgw" },
  { title: "SpeakerDeck", id: "utgwkk", url: "https://speakerdeck.com/utgwkk" },
  {
    title: "Python",
    id: "utgwkk",
    url: "https://www.python.org/users/utgwkk/",
  },
  { title: "AtCoder", id: "utgwkk", url: "https://atcoder.jp/user/utgwkk" },
  {
    title: "niconico",
    id: "20617895",
    url: "https://www.nicovideo.jp/user/20617895",
  },
  { title: "pixiv", id: "utgwkk", url: "https://pixiv.me/utgwkk" },
  {
    title: "Steam",
    id: "utgwkk",
    url: "https://steamcommunity.com/id/utgwkk/",
  },
  { title: "Monappy", id: "utgwkk", url: "https://monappy.jp/u/utgwkk" },
  { title: "Keybase", id: "utgwkk", url: "https://keybase.io/utgwkk" },
  { title: "PAUSE", id: "UTGWKK", url: "https://metacpan.org/author/UTGWKK" },
  { title: "Discord", id: "utgwkk#3191" },
  { title: "Swarm", id: "utgwkk" },
  { title: "Yo", id: "UTAGAWAKIKI" },
  {
    title: "Mastodon",
    id: "@utgwkk@mastodon.social",
    url: "https://mastodon.social/@utgwkk",
    rel: "me",
  },
  {
    title: "mixi2",
    id: "utgwkk",
    url: "https://mixi.social/@utgwkk",
  },
  {
    title: "Bluesky",
    id: "@utgwkk.bsky.social",
    url: "https://bsky.app/profile/utgwkk.bsky.social",
  },
  { title: "PyPI", id: "utgwkk", url: "https://pypi.org/user/utgwkk/" },
  { title: "Blue Archive (JP)", id: "AYVBUOUW" },
  { title: "Genshin Impact", id: "819415045" },
];

const AccountListItem: React.FC<Account> = ({ title, id, url, rel }) => {
  const linkText = `${title} (${id})`;
  return (
    <li>
      {url ? (
        <a rel={rel} href={url}>
          {linkText}
        </a>
      ) : (
        linkText
      )}
    </li>
  );
};

export const AccountList: React.FC = () => {
  return (
    <ul>
      {accountList.map((account, i) => (
        <AccountListItem {...account} key={i} />
      ))}
      <li>And so on ...</li>
    </ul>
  );
};
