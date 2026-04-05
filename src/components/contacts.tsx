export const Contacts = () => (
  <div id="contacts" className="flex justify-between w-4/5 mx-auto max-[480px]:w-full">
    <div>
      <a href="https://twitter.com/utgwkk">
        <img
          src="img/twitter.png"
          alt="Twitter"
          className="w-[120px] h-[120px] max-[480px]:w-16 max-[480px]:h-16"
        />
      </a>
    </div>
    <div>
      <a href="https://github.com/utgwkk">
        <img
          src="img/github.png"
          alt="GitHub"
          className="w-[120px] h-[120px] max-[480px]:w-16 max-[480px]:h-16"
        />
      </a>
    </div>
    <div>
      <a href="https://blog.utgw.net/?utm_source=utgw-net">
        <img
          src="img/hatenablog.svg"
          alt="Hatena Blog"
          className="w-[120px] h-[120px] max-[480px]:w-16 max-[480px]:h-16"
        />
      </a>
    </div>
  </div>
);
