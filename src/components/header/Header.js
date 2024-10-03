import Image from "next/image";
import "../header/header.css";
import Button from "@mui/material/Button";
import Container from '@mui/material/Container';

function Header() {
  return (
   

    <Container>
    <section id="header" className="header-container">
         <Image className="header-wallpaper" src="/images/header-wallpaper.jpg" alt="header-wallpaper" width={2880} height={1912} />
         <Image className="header-wallpaper-text" src="/images/Zenithfit.png" alt="header-wallpaper-text" width={1440} height={413} />

      <div className="header-top">
        <Image src="/images/logo.png" alt="logo" width={46} height={43} />
        <div>Navbar</div>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#3CC531",
            textTransform: "none",
            "&:hover": { backgroundColor: "darkgreen" },
          }}
        >
          Book Us Now
        </Button>
      </div>

      <div className="header-content">
        <div className="header-text">
          {" "}
          <h1>ZenithFit</h1>
          <p className="header-description">
            Welcome to ZenithFit, Where Every Workout Leads You Closer to Your
            Peak. Join Us Today and Start Your Journey to Ultimate Fitness
            Excellence.
          </p>
        </div>
        <div className="header-image">
          {" "}
          <Image className="header-image1" src="/images/header-image1.png" alt="header-image1" width={500} height={600} />
          <Image src="/images/header-image2.png" alt="header-image2" width={400} height={500} />
        </div>
      </div>
      </section>
      </Container>
    
 
  );
}

export default Header;
