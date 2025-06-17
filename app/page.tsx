import { Metadata } from "next";
import { AccountList } from "../components/account-list";
import { Contacts } from "../components/contacts";
import { LargeIcon } from "../components/large-icon";
import { Presentation, getPresentations } from "../lib/speakerdeck";

export const metadata: Metadata = {
  title: "utgw.net",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  openGraph: {
    title: "utgw.net",
    description: "utgw.net",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {},
};

interface HomeProps {
  presentations: Presentation[];
}

const Home = ({ presentations }: HomeProps) => {
  return (
    <>
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
          <li>can use Go, Perl, Python, TypeScript, Ruby and so on.</li>
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
        <div>&copy; 2016-2025 UTAGAWA Kiki</div>
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

// Cache for 20 minutes
export const revalidate = 1200;

const Page = async () => {
  const presentations = await getPresentations(5);

  return <Home presentations={presentations} />;
};

export default Page;
