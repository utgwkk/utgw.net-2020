export const Contacts = () => (
  <div id="contacts" className="mx-auto flex w-4/5 justify-between max-[480px]:w-full">
    <div>
      <a href="https://twitter.com/utgwkk">
        <img
          src="img/twitter.png"
          alt="Twitter"
          className="h-[120px] w-[120px] max-[480px]:h-16 max-[480px]:w-16"
        />
      </a>
    </div>
    <div>
      <a href="https://github.com/utgwkk">
        <img
          src="img/github.png"
          alt="GitHub"
          className="h-[120px] w-[120px] max-[480px]:h-16 max-[480px]:w-16"
        />
      </a>
    </div>
    <div>
      <a href="https://blog.utgw.net/?utm_source=utgw-net">
        <img
          src="img/hatenablog.svg"
          alt="Hatena Blog"
          className="h-[120px] w-[120px] max-[480px]:h-16 max-[480px]:w-16"
        />
      </a>
    </div>
  </div>
);
