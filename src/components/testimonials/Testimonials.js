import Image from "next/image";
import "../testimonials/testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials-container">
      <Image
        className="testimonials-wallpaper"
        src="/images/testimonial-wallpaper.png"
        alt="testimonial-wallpaper"
        width={1792}
        height={990}
      />
      <div className="testimonial-card-wrapper">
        <div className="testimonial-card">
          <Image
            className="profile-circle"
            src="/images/profile-circle.png"
            alt="profile-circle"
            width={113}
            height={110}
          />

          <h4>Gideon Johnson</h4>
          <p>
            At first I didn’t believe I could reach my fitness goal but right
            now I can proudly show off my tummy
          </p>
          <Image
            className="rating"
            src="/images/rating.png"
            alt="rating"
            width={120}
            height={24}
          />
        </div>

        <div className="testimonial-card">
          <Image
            className="profile-circle"
            src="/images/profile-circle.png"
            alt="profile-circle"
            width={113}
            height={110}
          />

          <h4>Gideon Johnson</h4>
          <p>
            At first I didn’t believe I could reach my fitness goal but right
            now I can proudly show off my tummy
          </p>
          <Image
            className="rating"
            src="/images/rating.png"
            alt="rating"
            width={120}
            height={24}
          />
        </div>
        <div className="testimonial-card">
          <Image
            className="profile-circle"
            src="/images/profile-circle.png"
            alt="profile-circle"
            width={113}
            height={110}
          />

          <h4>Gideon Johnson</h4>
          <p>
            At first I didn’t believe I could reach my fitness goal but right
            now I can proudly show off my tummy
          </p>
          <Image
            className="rating"
            src="/images/rating.png"
            alt="rating"
            width={120}
            height={24}
          />
        </div>
        <div className="testimonial-card">
          <Image
            className="profile-circle"
            src="/images/profile-circle.png"
            alt="profile-circle"
            width={113}
            height={110}
          />

          <h4>Gideon Johnson</h4>
          <p>
            At first I didn’t believe I could reach my fitness goal but right
            now I can proudly show off my tummy
          </p>
          <Image
            className="rating"
            src="/images/rating.png"
            alt="rating"
            width={120}
            height={24}
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
