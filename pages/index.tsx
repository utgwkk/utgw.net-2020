import React from "react";
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="format-detection" content="telephone=no" />
        <link href="/favicon.ico" rel="icon" type="image/png" />
        <link
          href="https://fonts.googleapis.com/css?family=Ubuntu:300"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <h1>utgw.net</h1>
      <div id="icon" />
      <div id="contacts">
        <div className="contact twitter">
          <a href="https://twitter.com/utgwkk">
            <img src="img/twitter.png" alt="Twitter" />
          </a>
        </div>
        <div className="contact github">
          <a href="https://github.com/utgwkk">
            <img src="img/github.png" alt="GitHub" />
          </a>
        </div>
        <div className="contact hatenablog">
          <a href="https://utgwkk.hateblo.jp/">
            <img src="img/hatenablog.svg" alt="Hatena Blog" />
          </a>
        </div>
      </div>
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
          <li>can use Python, Ruby, Go.</li>
        </ul>
        <h2>My Accounts</h2>
        <ul>
          <li>
            <a href="https://twitter.com/@utgwkk">Twitter (@utgwkk)</a>
          </li>
          <li>
            <a href="https://github.com/utgwkk">GitHub (@utgwkk)</a>
          </li>
          <li>
            <a href="https://profile.hatena.ne.jp/utgwkk/">Hatena (utgwkk)</a>
          </li>
          <li>
            <a href="https://tumblr.utgw.net/">Tumblr (@utgwkk)</a>
          </li>
          <li>
            <a href="https://www.slideshare.net/utgw">SlideShare (utgw)</a>
          </li>
          <li>
            <a href="https://speakerdeck.com/utgwkk">SpeakerDeck (utgwkk)</a>
          </li>
          <li>
            <a href="https://www.python.org/users/utgwkk/">
              Python Software Foundation (utgwkk)
            </a>
          </li>
          <li>
            <a href="https://atcoder.jp/user/utgwkk">AtCoder (utgwkk)</a>
          </li>
          <li>
            <a href="https://www.nicovideo.jp/user/20617895">
              niconico (20617895)
            </a>
          </li>
          <li>
            <a href="https://pixiv.me/utgwkk">pixiv (utgwkk)</a>
          </li>
          <li>
            <a href="https://steamcommunity.com/id/utgwkk/">Steam (utgwkk)</a>
          </li>
          <li>
            <a href="https://monappy.jp/u/utgwkk">Monappy (utgwkk)</a>
          </li>
          <li>
            <a href="https://keybase.io/utgwkk">Keybase (utgwkk)</a>
          </li>
          <li>
            <a href="https://metacpan.org/author/UTGWKK">PAUSE (UTGWKK)</a>
          </li>
          <li>Discord (utgwkk#3191)</li>
          <li>Swarm (utgwkk)</li>
          <li>Yo (UTAGAWAKIKI)</li>
          <li>PyPI (utgwkk)</li>
          <li>And so on ...</li>
        </ul>
        <h2>Presentations</h2>
        <a href="https://sugarheart.utgw.net/static/pdf/">
          List of presentations
        </a>
        <h2>Contacts</h2>
        <em>replace (at) into @ before sending.</em>
        <ul>
          <li>
            <address> utagawa.kiki (at) gmail.com</address>
          </li>
          <li>
            <address> utgw (at) kmc.gr.jp</address>
          </li>
        </ul>
        <hr />
        <div>&copy; 2016-2020 UTAGAWA Kiki</div>
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
