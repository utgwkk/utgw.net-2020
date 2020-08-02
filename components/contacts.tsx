import React from "react";

export const Contacts: React.FC = () => (
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
);
