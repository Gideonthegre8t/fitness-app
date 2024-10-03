import Image from "next/image";

import "../videos/videos.css";

function Videos() {
  return (
    <section className="videos-container">
      <h2>Workout Videos</h2>
      <Image
        className="videos-wallpaper-text"
        src="/images/videos-wallpaper-text.png"
        alt="videos-wallpaper-text"
        width={1350}
        height={429}
      />
      <diiv>
        {" "}
        <div className="vidoes-wrapper">
          <Image
            className="videos-image"
            src="/images/female.png"
            alt="videos-image"
            width={643}
            height={762}
          />
          <Image
            className="videos-image"
            src="/images/male.png"
            alt="videos-image"
            width={643}
            height={762}
          />
        </div>
      <div className="see-more"><p>See more</p>   <Image
            className="arrow-down"
            src="/images/arrow-down.png"
            alt="videos-image"
            width={24}
            height={24}
          /></div>
      </diiv>
    </section>
  );
}

export default Videos;
