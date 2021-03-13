import React, { VFC } from "react";

interface Account {
  title: string;
  id: string;
  url?: string;
}

const accountList: Account[] = [
  { id: "@utgwkk", title: "Twitter", url: "https://twitter.com/@utgwkk" },
  { id: "@utgwkk", title: "GitHub", url: "https://github.com/utgwkk" },
  {
    id: "utgwkk",
    title: "Hatena",
    url: "https://profile.hatena.ne.jp/utgwkk/",
  },
  { id: "@utgwkk", title: "Tumblr", url: "https://tumblr.utgw.net/" },
  { id: "utgw", title: "SlideShare", url: "https://www.slideshare.net/utgw" },
  { id: "utgwkk", title: "SpeakerDeck", url: "https://speakerdeck.com/utgwkk" },
  {
    id: "utgwkk",
    title: "Python",
    url: "https://www.python.org/users/utgwkk/",
  },
  { id: "utgwkk", title: "AtCoder", url: "https://atcoder.jp/user/utgwkk" },
  {
    id: "20617895",
    title: "niconico",
    url: "https://www.nicovideo.jp/user/20617895",
  },
  { id: "utgwkk", title: "pixiv", url: "https://pixiv.me/utgwkk" },
  {
    id: "utgwkk",
    title: "Steam",
    url: "https://steamcommunity.com/id/utgwkk/",
  },
  { id: "utgwkk", title: "Monappy", url: "https://monappy.jp/u/utgwkk" },
  { id: "utgwkk", title: "Keybase", url: "https://keybase.io/utgwkk" },
  { id: "UTGWKK", title: "PAUSE", url: "https://metacpan.org/author/UTGWKK" },
  { id: "utgwkk#3191", title: "Discord" },
  { id: "utgwkk", title: "Swarm" },
  { id: "UTAGAWAKIKI", title: "Yo" },
  { id: "utgwkk", title: "PyPI", url: "https://pypi.org/user/utgwkk/" },
];

const AccountListItem: VFC<Account> = ({ title, id, url }) => {
  const linkText = `${title} (${id})`;
  return <li>{url ? <a href={url}>{linkText}</a> : linkText}</li>;
};

export const AccountList: VFC = () => {
  return (
    <ul>
      {accountList.map((account, i) => (
        <AccountListItem {...account} key={i} />
      ))}
      <li>And so on ...</li>
    </ul>
  );
};
