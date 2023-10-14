import React from "react";
import { motion } from "framer-motion";

const Text = ({ text }) => {
  const letterVariants = {
    initial: {
      opacity: 0,
      y: -40,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.88,
      },
    },
  };

  return (
    <div>
      <motion.span
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.2 }}
        aria-hidden
      >
        {text.split(" ").map((word) => (
          <span className="inline-block">
            {word.split("").map((e) => (
              <motion.span className="inline-block" variants={letterVariants}>
                {e}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </div>
  );
};

export default Text;
