"use client";
import Image from "next/image";
import "../testimonials/testimonials.css";
import { useRef, useState, useEffect } from "react";

function Testimonials() {
  const testimonials = [
    {
      name: "Gideon Johnson",
      text: "At first I didn’t believe I could reach my fitness goal but right now I can proudly show off my tummy.",
      rating: "/images/rating.png",
    },
    {
      name: "Alice Smith",
      text: "I lost 10 pounds in a month! The program is fantastic.",
      rating: "/images/rating.png",
    },
    {
      name: "Mark Williams",
      text: "The trainers are so motivating, I can't recommend this place enough!",
      rating: "/images/rating.png",
    },
    {
      name: "Emily Davis",
      text: "I feel stronger and healthier after just a few weeks!",
      rating: "/images/rating.png",
    },
    {
      name: "Michael Brown",
      text: "The community support here is unparalleled, I love it!",
      rating: "/images/rating.png",
    },
    {
      name: "Sarah Wilson",
      text: "I never thought I could achieve this, but I did!",
      rating: "/images/rating.png",
    },
    {
      name: "James Taylor",
      text: "Great facilities and even better trainers!",
      rating: "/images/rating.png",
    },
    {
      name: "Laura Moore",
      text: "This program has changed my life for the better.",
      rating: "/images/rating.png",
    },
  ];

  const wrapperRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    // Function to check if we are at the start or end of the scroll
    const handleScroll = () => {
      setShowLeftArrow(wrapper.scrollLeft > 0);
      setShowRightArrow(
        wrapper.scrollLeft < wrapper.scrollWidth - wrapper.clientWidth
      );
    };

    // Add scroll event listener
    wrapper.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      wrapper.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Mouse event handlers for dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - wrapperRef.current.offsetLeft);
    setScrollLeft(wrapperRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - wrapperRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the scroll speed (2 for faster drag)
    wrapperRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="testimonials-container">
      <Image
        className="testimonials-wallpaper"
        src="/images/testimonial-wallpaper.png"
        alt="testimonial-wallpaper"
        width={1792}
        height={990}
      />

      {/* Left Arrow */}
      {showLeftArrow && (
        <div
          className="left-arrow"
          onClick={() => (wrapperRef.current.scrollLeft -= 200)}
        >
          <Image
            src="/images/right-arrow.png" // Use the same right arrow image
            alt="left-arrow"
            width={30}
            height={30}
          />
        </div>
      )}

      {/* Right Arrow */}
      {showRightArrow && (
        <div
          className="right-arrow"
          onClick={() => (wrapperRef.current.scrollLeft += 200)}
        >
          <Image
            src="/images/right-arrow.png"
            alt="right-arrow"
            width={30}
            height={30}
          />
        </div>
      )}

      <div
        className="testimonial-card-wrapper"
        ref={wrapperRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {testimonials.map((testimonial, index) => {
          const cardHeightClass =
            index % 3 === 0 ? "high" : index % 3 === 1 ? "medium" : "low";
          return (
            <div className={`testimonial-card ${cardHeightClass}`} key={index}>
              <Image
                className="profile-circle"
                src="/images/profile-circle.png"
                alt="profile-circle"
                width={113}
                height={110}
              />
              <h4>{testimonial.name}</h4>
              <p>{testimonial.text}</p>
              <Image
                className="rating"
                src={testimonial.rating}
                alt="rating"
                width={120}
                height={24}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Testimonials;
