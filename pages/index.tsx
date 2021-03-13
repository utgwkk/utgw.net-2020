import React from "react";
import { LargeIcon } from "../components/large-icon";
import { Contacts } from "../components/contacts";
import Head from "next/head";
import { AccountList } from "../components/account-list";

const Home: React.VFC = () => {
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
            is a 1st grade student of Graduate School of Informatics, Kyoto
            University.
          </li>
          <li>
            is a member of <a href="https://kmc.jp/">KMC(京大マイコンクラブ)</a>
            .
          </li>
          <li>is studying computer science.</li>
          <li>is a Pythonista.</li>
          <li>can use Python, Perl, Ruby, Go.</li>
        </ul>
        <h2>My Accounts</h2>
          <AccountList />
        <h2>Presentations</h2>
        <a href="https://sugarheart.utgw.net/static/pdf/">
          List of presentations
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
        <div>&copy; 2016-2021 UTAGAWA Kiki</div>
        <div>
          <a href="https://sites.google.com/site/happybusy/">
            <img src="/img/busy_banner.png" alt="happybusy" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
