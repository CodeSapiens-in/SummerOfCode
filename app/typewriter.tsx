import React from "react";
import { motion } from "framer-motion";
import { cn } from "./utils/cn";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const renderWords = () => {
    return (
      <div>
        {words.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block">
            {word.text.split('').map((char, index) => ( // Spread operator used to convert string to array of characters
              <span
                key={`char-${index}`}
                className={cn(` text-white `, word.className)}
              >
                {char}
              </span>
            ))}
            &nbsp;
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
          style={{
            whiteSpace: "wrap",
          }}
        >
          {renderWords()}{" "}
        </div>{" "}
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px]  h-50 sm:h-20 xl:h-12 bg-orange-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
