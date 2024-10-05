"use client";

import { useEffect } from "react";
import Image from "next/image";
import "../header/header.css";
import Button from "@mui/material/Button";
import Container from '@mui/material/Container';
import Navbar from "../navbar/Navbar";
import { gsap } from "gsap";

function Header() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    // Typing effect for ZenithFit with flashing cursor
    const headerText = "ZenithFit";
    const h1Element = document.querySelector(".header-text h1");

    if (h1Element) {
      h1Element.innerHTML = headerText
        .split("")
        .map((letter) => `<span class="letter">${letter}</span>`)
        .join("") + `<span class="cursor">|</span>`;

      tl.to(".header-text .letter", {
        opacity: 1,
        duration: 0.1,
        stagger: 0.1, // Delay between each letter
      }).to(".cursor", {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: 0.6, // Blinking cursor
      });
    }

    // Description fade-in
    tl.fromTo(
      ".header-description",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2 },
      "-=0.8"
    );

    // Image animations: rotate, scale, and move in
    tl.fromTo(
      ".header-image1",
      { opacity: 0, x: -200, rotate: "-10deg", scale: 0.8 },
      { opacity: 1, x: 0, rotate: "0deg", scale: 1, duration: 2, delay: 0.1 }
    )
      .fromTo(
        ".header-image2",
        { opacity: 0, x: 200, rotate: "10deg", scale: 0.8 },
        { opacity: 1, x: 0, rotate: "0deg", scale: 1, duration: 2 },
        "-=1.5"
      );

    // Button pop-in effect
    tl.fromTo(
      ".book-button",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "bounce.out" }
    );

    // Advanced hover state for images
    const images = document.querySelectorAll(".header-image img");
    images.forEach((image) => {
      image.addEventListener("mouseenter", () => {
        gsap.to(image, {
          scale: 1.1,
          rotate: "5deg",
          filter: "brightness(1.2) contrast(1.1)",
          duration: 0.8,
          ease: "power3.out",
        });
      });

      image.addEventListener("mouseleave", () => {
        gsap.to(image, {
          scale: 1,
          rotate: "0deg",
          filter: "brightness(1) contrast(1)",
          duration: 0.8,
          ease: "power3.inOut",
        });
      });
    });

    // Mobile-specific adjustments using matchMedia
    gsap.matchMedia().add("(max-width: 768px)", () => {
      gsap.fromTo(
        ".header-text h1",
        { opacity: 0, scale: 0.7 },
        { opacity: 1, scale: 1, duration: 1.5 }
      );

      gsap.fromTo(
        ".header-description",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2 }
      );

      gsap.fromTo(
        ".header-image img",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.5 }
      );
    });
  }, []);

  return (
    <section id="header" className="header-container">
      <Image className="header-wallpaper" src="/images/header-wallpaper.jpg" alt="header-wallpaper" width={2880} height={1912} />
      <Image className="header-wallpaper-text" src="/images/Zenithfit.png" alt="header-wallpaper-text" width={1440} height={413} />

      <div className="header-top">
        <Image src="/images/logo.png" alt="logo" width={46} height={43} />
        <div><Navbar /></div>
        <Button
          className="book-button"
          variant="contained"
          sx={{
            width: "142px", 
            height: "43px",  
            backgroundColor: "#3CC531",
            textTransform: "none",
            "&:hover": { backgroundColor: "darkgreen" },
          }}
        >
          Book Us Now
        </Button>
      </div>

      <Container>
        <div className="header-content">
          <div className="header-text">
            <h1></h1> {/* Text will be filled by JS for the typing effect */}
            <p className="header-description">
              Welcome to ZenithFit, Where Every Workout Leads You Closer to Your
              Peak. Join Us Today and Start Your Journey to Ultimate Fitness
              Excellence.
            </p>
          </div>
          <div className="header-image">
            <Image className="header-image1" src="/images/header-image1.png" alt="header-image1" width={500} height={600} />
            <Image className="header-image2" src="/images/header-image2.png" alt="header-image2" width={400} height={500} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Header;
