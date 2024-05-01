import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import ParticlesContainer from "../../components/ParticlesContainer";
import Bulb from "../../components/Bulb"; // Assuming this is your custom bulb component
import Circles from "../../components/Circles"; // Assuming this is your custom circles component

const Contact = () => {
  // No need for isOpen state in this case

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* Text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={{
              open: { opacity: 1, scale: 1 },
              closed: { opacity: 0.7, scale: 0.9 },
            }}
            initial="open" // Always open in this case
            animate="open" // No animation change needed
            exit="closed"
            className="h2 text-center mb-12 cursor-default" // Not clickable
          >
            Let's <span className="text-accent">connect.</span>
            <BsArrowRight /> {/* Arrow for decoration */}
          </motion.h2>

          {/* Form (always visible) */}
          <div className="flex-1 flex flex-col gap-6 w-full mx-auto">
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="input"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input"
              required
            />
            <textarea
              name="message"
              placeholder="Message..."
              className="textarea"
              required
            />
            <button type="submit" className="btn rounded-full">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <ParticlesContainer />
      <Bulb />
      <Circles />
    </div>
  );
};

export default Contact;
