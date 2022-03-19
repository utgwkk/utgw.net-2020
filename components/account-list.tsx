import React from "react";

interface Account {
  title: string;
  id: string;
  url?: string;
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
  { title: "PyPI", id: "utgwkk", url: "https://pypi.org/user/utgwkk/" },
  { title: "Blue Archive (JP)", id: "22922959" },
  { title: "Genshin Impact", id: "819415045" },
];

const AccountListItem: React.VFC<Account> = ({ title, id, url }) => {
  const linkText = `${title} (${id})`;
  return <li>{url ? <a href={url}>{linkText}</a> : linkText}</li>;
};

export const AccountList: React.VFC = () => {
  return (
    <ul>
      {accountList.map((account, i) => (
        <AccountListItem {...account} key={i} />
      ))}
      <li>And so on ...</li>
    </ul>
  );
};
