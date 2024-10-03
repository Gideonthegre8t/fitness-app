import "../services/services.css";
import Image from "next/image";

import Container from "@mui/material/Container";

function Services() {
  return (
    <Container>
      <section id="services" className="services-container">
        <Image
          className="service-wallpaper-text"
          src="/images/service-wallpaper-text.png"
          alt="wallpaper-text"
          width={700}
          height={1545}
        />

        <div className="training">
          <Image
            className="training-img"
            src="/images/personal.png"
            alt="training-img"
            width={405}
            height={427}
          />
          <div className="training-description">
            <h3>Personal training</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              suscipit nisl id elit tincidunt, vitae vestibulum justo fermentum.
              Pellentesque ut velit quam. In id purus in velit pellentesque
              sagittis. Nullam blandit at ipsum et imperdiet.
            </p>
            <Image
              className="arrow-img"
              src="/images/right-arrow.png"
              alt="right-arrow"
              width={18}
              height={18}
            />
          </div>
        </div>

        <div className="training">
          <div className="training-description">
            <h3>Group Training</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              suscipit nisl id elit tincidunt, vitae vestibulum justo fermentum.
              Pellentesque ut velit quam. In id purus in velit pellentesque
              sagittis. Nullam blandit at ipsum et imperdiet.
            </p>
            <Image
              className="arrow-img"
              src="/images/right-arrow.png"
              alt="right-arrow"
              width={18}
              height={18}
            />
          </div>
          <Image
            className="training-img"
            src="/images/group.png"
            alt="training-img"
            width={405}
            height={427}
          />
        </div>

        <div className="training">
          <Image
            className="training-img"
            src="/images/nutrition.png"
            alt="training-img"
            width={405}
            height={427}
          />
          <div className="training-description">
            <h3>Nutrition Counselling</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              suscipit nisl id elit tincidunt, vitae vestibulum justo fermentum.
              Pellentesque ut velit quam. In id purus in velit pellentesque
              sagittis. Nullam blandit at ipsum et imperdiet.
            </p>
            <Image
              className="arrow-img"
              src="/images/right-arrow.png"
              alt="right-arrow"
              width={18}
              height={18}
            />
          </div>
        </div>

        <div className="training">
          <div className="training-description">
            <h3>Wellness coaching</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              suscipit nisl id elit tincidunt, vitae vestibulum justo fermentum.
              Pellentesque ut velit quam. In id purus in velit pellentesque
              sagittis. Nullam blandit at ipsum et imperdiet.
            </p>
            <Image
              className="arrow-img"
              src="/images/right-arrow.png"
              alt="right-arrow"
              width={18}
              height={18}
            />
          </div>
          <Image
            className="training-img"
            src="/images/wellness.png"
            alt="training-img"
            width={405}
            height={427}
          />
        </div>


        <h2 className="services-header">Services Overview</h2>
      </section>
    </Container>
  );
}

export default Services;
