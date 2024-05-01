import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsArrowDown } from "react-icons/bs";
import ParticlesContainer from "../../components/ParticlesContainer";
import Bulb from "../../components/Bulb"; // Assuming this is your custom bulb component
import Circles from "../../components/Circles"; // Assuming this is your custom circles component

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* Text & button */}
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={{
              open: { opacity: 1, scale: 1 },
              closed: { opacity: 0.7, scale: 0.9 },
            }}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            exit="closed"
            className="h2 text-center mb-12 cursor-pointer"
            onClick={handleToggle}
          >
            Let's <span className="text-accent">connect.</span>
            {isOpen ? <BsArrowDown /> : <BsArrowRight />}
          </motion.h2>

          {/* Form (hidden initially) */}
          <div className={`flex-1 flex flex-col gap-6 w-full mx-auto transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
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
