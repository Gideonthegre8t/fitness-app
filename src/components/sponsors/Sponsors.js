import Image from "next/image";
import "../sponsors/sponsors.css";

function Sponsors() {
  return (
    <section id="sponsors" className="sponsors-container">
      <div className="sponsors-wrapper">
        <div className="sponsors-logo">
          <Image
            className="sponsor1"
            src="/images/Reebok.png"
            alt="reebok-logo"
            width={62}
            height={32}
          />
          <Image
            className="sponsor2"
            src="/images/intercom.png"
            alt="intercom-logo"
            width={120}
            height={30}
          />
          <Image
            className="sponsor3"
            src="/images/notion.png"
            alt="notion-logo"
            width={119}
            height={43}
          />
          <Image
            className="sponsor4"
            src="/images/revolut.png"
            alt="revolut-logo"
            width={136}
            height={90}
          />
          <Image
            className="sponsor5"
            src="/images/subway.png"
            alt="subway-logo"
            width={114}
            height={24}
          />
          <Image
            className="sponsor6"
            src="/images/Reddit.png"
            alt="reddit-logo"
            width={136}
            height={40}
          />
          <Image
            className="sponsor7"
            src="/images/redbull.png"
            alt="redbull-logo"
            width={136}
            height={40}
          />
        </div>
        {/* Duplicate set for infinite scroll */}
        <div className="sponsors-logo">
          <Image
            className="sponsor1"
            src="/images/Reebok.png"
            alt="reebok-logo"
            width={62}
            height={32}
          />
          <Image
            className="sponsor2"
            src="/images/intercom.png"
            alt="intercom-logo"
            width={120}
            height={30}
          />
          <Image
            className="sponsor3"
            src="/images/notion.png"
            alt="notion-logo"
            width={119}
            height={43}
          />
          <Image
            className="sponsor4"
            src="/images/revolut.png"
            alt="revolut-logo"
            width={136}
            height={90}
          />
          <Image
            className="sponsor5"
            src="/images/subway.png"
            alt="subway-logo"
            width={114}
            height={24}
          />
          <Image
            className="sponsor6"
            src="/images/Reddit.png"
            alt="reddit-logo"
            width={136}
            height={40}
          />
          <Image
            className="sponsor7"
            src="/images/redbull.png"
            alt="redbull-logo"
            width={136}
            height={40}
          />
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
