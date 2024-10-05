"use client";
import "../services/services.css";
import Image from "next/image";
import Container from "@mui/material/Container";
import { motion } from "framer-motion";

function Services() {
  // Define the animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const bounce = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0], // Up, down, back to original
      transition: {
        duration: 1,
        ease: "easeInOut", // Add ease-in-out effect
        repeat: Infinity,
        repeatType: "reverse", // Reverse the bounce
      },
    },
  };

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
          <motion.div
            className="training-img"
            variants={bounce}
            initial="initial"
            animate="animate"
          >
            <Image
              src="/images/personal.png"
              alt="training-img"
              width={405}
              height={427}
            />
          </motion.div>
          <motion.div
            className="training-description"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
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
          </motion.div>
        </div>

        <div className="training">
          <motion.div
            className="training-description"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
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
          </motion.div>
          <motion.div
            className="training-img"
            variants={bounce}
            initial="initial"
            animate="animate"
          >
            <Image
              src="/images/group.png"
              alt="training-img"
              width={405}
              height={427}
            />
          </motion.div>
        </div>

        <div className="training">
          <motion.div
            className="training-img"
            variants={bounce}
            initial="initial"
            animate="animate"
          >
            <Image
              src="/images/nutrition.png"
              alt="training-img"
              width={405}
              height={427}
            />
          </motion.div>
          <motion.div
            className="training-description"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
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
          </motion.div>
        </div>

        <div className="training">
          <motion.div
            className="training-description"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
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
          </motion.div>
          <motion.div
            className="training-img"
            variants={bounce}
            initial="initial"
            animate="animate"
          >
            <Image
              src="/images/wellness.png"
              alt="training-img"
              width={405}
              height={427}
            />
          </motion.div>
        </div>

        <h2 className="services-header">Services Overview</h2>
      </section>
    </Container>
  );
}

export default Services;
