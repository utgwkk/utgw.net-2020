import { AccountList } from "../components/account-list";
import { Contacts } from "../components/contacts";
import { LargeIcon } from "../components/large-icon";
import { Presentation } from "../lib/speakerdeck";

interface HomeProps {
  presentations: Presentation[];
}

export const Home = ({ presentations }: HomeProps) => {
  return (
    <>
      <h1>utgw.net</h1>
      <LargeIcon />
      <Contacts />
      <div
        id="aboutme"
        className="w-4/5 bg-[#fefefe] border-[3px] border-solid border-[#333] rounded-[10px] mx-auto mt-[3em] p-[1em] dark:bg-[#010101] dark:text-white dark:border-[#ccc]"
      >
        <h2>Profile</h2>
        <p>utgwkk (@utgwkk, a.k.a. @utgw, UTAGAWA Kiki) ...</p>
        <ul>
          <li>
            is a member of <a href="https://kmc.jp/">KMC(京大マイコンクラブ)</a>.
          </li>
          <li>can use Go, Perl, Python, TypeScript, Ruby and so on.</li>
        </ul>
        <h2>My Accounts</h2>
        <AccountList />
        <h2>Presentations</h2>
        <ul className="[margin-block-start:0] [margin-block-end:0] [margin-inline-start:0] [padding-inline-start:0]">
          {presentations.slice(0, 5).map((presentation) => (
            <li
              key={presentation.id}
              className="flex justify-between mb-[10px] gap-[5px] max-[480px]:block"
            >
              <div className="max-[480px]:mb-[10px]">
                <a href={presentation.url}>{presentation.title}</a>
              </div>
              <iframe
                className="speakerdeck-iframe aspect-[710/399] border-0 p-0 m-0 bg-transparent max-h-[200px]"
                src={presentation.iframeUrl}
                loading="lazy"
                frameBorder={0}
                allowTransparency
                allowFullScreen
              ></iframe>
            </li>
          ))}
        </ul>
        <a href="https://speakerdeck.com/utgwkk">List of presentations (Speakerdeck)</a>
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
        <hr className="border-[#333] my-[20px] mx-auto" />
        <div>&copy; 2016-2026 UTAGAWA Kiki</div>
        <div>
          <a href="https://sites.google.com/view/happy-busy/">
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
