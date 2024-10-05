import Container from "@mui/material/Container";
import "../footer/footer.css";
import Image from "next/image";

function Footer() {
  return (
    <section id="contact" className="footer-container">
      <Image
        className="footer-wallpaper"
        src="/images/footer-wallpaper.png"
        alt="facebook"
        width={1222}
        height={190}
      />

      <h2 className="footer-header">Contact Us</h2>

      <div className="contact-wrapper">
        {" "}
        <Container className="contact-flex">
          <div className="contact-flex1">
            <>
              {" "}
              <p>
                No pain no gain, your ultimate goal is
                to become the best version of yourself.
              </p>
            </>

            <div className="handles">
              <Image
                className="social-media"
                src="/images/Facebook.png"
                alt="facebook"
                width={28}
                height={28}
              />

              <Image
                className="social-media"
                src="/images/instagram.png"
                alt="instagram"
                width={28}
                height={28}
              />

              <Image
                className="social-media"
                src="/images/Twitter.png"
                alt="twitter"
                width={28}
                height={28}
              />

              <Image
                className="social-media"
                src="/images/LinkedIn.png"
                alt="twitter"
                width={28}
                height={28}
              />
            </div>
          </div>{" "}
          <div className="contact-flex2">
            <div className="quick-links">
              <f4 className="footer-mini-header">Quick Links</f4>
              <div className="links">
                {" "}
                <p>About</p>
                <p>Appointment</p>
                <p>Blog</p>
                <p>Contact</p>
              </div>
            </div>
          </div>
          <div className="information">
            <f4 className="footer-mini-header">Information</f4>
            <div className="links">
              {" "}
              <p>Privacy Policy</p>
              <p>Terms & Condition</p>
              <p>FAQ</p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Footer;
