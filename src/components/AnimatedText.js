import React from "react";
import { motion } from "framer-motion";

const quote = {
  intial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      deplay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  intial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className}`}
        variants={quote}
        intial="intial"
        animate="animate"
      >
        {text.split(" ").map((word, idx) => (
          <motion.span
            key={word + "-" + idx}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
