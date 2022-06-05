import React from "react";
import type { GetStaticProps } from "next";
import { LargeIcon } from "../components/large-icon";
import { Contacts } from "../components/contacts";
import Head from "next/head";
import { AccountList } from "../components/account-list";
import { getPresentations, Presentation } from "../lib/speakerdeck";

interface HomeProps {
  presentations: Presentation[];
}

const Home: React.VFC<HomeProps> = ({ presentations }) => {
  return (
    <>
      <Head>
        <title>utgw.net</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="format-detection" content="telephone=no" />
        <link href="/favicon.ico" rel="icon" type="image/png" />
      </Head>
      <h1>utgw.net</h1>
      <LargeIcon />
      <Contacts />
      <div id="aboutme">
        <h2>Profile</h2>
        <p>utgwkk (@utgwkk, a.k.a. @utgw, UTAGAWA Kiki) ...</p>
        <ul>
          <li>
            is a member of <a href="https://kmc.jp/">KMC(京大マイコンクラブ)</a>
            .
          </li>
          <li>is a Pythonista.</li>
          <li>can use Python, Perl, Ruby, Go.</li>
        </ul>
        <h2>My Accounts</h2>
        <AccountList />
        <h2>Presentations</h2>
        <ul className="presentation">
          {presentations.slice(0, 5).map((presentation) => (
            <li key={presentation.id} className="presentation-item">
              <div className="presentation-title">
                <a href={presentation.url}>{presentation.title}</a>
              </div>
              <iframe
                className="speakerdeck-iframe presentation-slide"
                src={presentation.iframeUrl}
                loading="lazy"
                frameBorder={0}
                allowTransparency
                allowFullScreen
              ></iframe>
            </li>
          ))}
        </ul>
        <a href="https://speakerdeck.com/utgwkk">
          List of presentations (Speakerdeck)
        </a>
        <h2>Contacts</h2>
        <em>replace (at) into @ before sending.</em>
        <ul>
          <li>
            <address> utagawakiki (at) gmail.com</address>
          </li>
          <li>
            <address> utgw (at) kmc.gr.jp</address>
          </li>
        </ul>
        <hr />
        <div>&copy; 2016-2022 UTAGAWA Kiki</div>
        <div>
          <a href="https://sites.google.com/site/happybusy/">
            <img
              src="/img/busy_banner.png"
              width={200}
              height={40}
              alt="happybusy"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const presentations = await getPresentations(5);

  return { props: { presentations } };
};

export default Home;
