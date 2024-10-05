import Image from "next/image";
import "../testimonials/testimonials.css";

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
        {testimonials.map((testimonial, index) => {
          // Determine card height based on index
          const cardHeightClass = index % 3 === 0 ? 'high' : index % 3 === 1 ? 'medium' : 'low';
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
