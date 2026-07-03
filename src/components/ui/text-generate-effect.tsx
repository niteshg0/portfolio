"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const wordsArray = words.split(" ");
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const spans = scope.current?.querySelectorAll("span");
            if (spans) {
              spans.forEach((span, i) => {
                setTimeout(() => {
                  span.classList.remove("opacity-0");
                  span.classList.add("opacity-100");
                }, i * 400);
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentScope = scope.current;
    if (currentScope) {
      observer.observe(currentScope);
    }

    return () => {
      if (currentScope) {
        observer.unobserve(currentScope);
      }
    };
  }, [words]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-white opacity-0 transition-opacity duration-1000 ease-in-out"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 2,
                delay: idx * 0.4,
                ease: "easeInOut",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={className}>
      <div className="mt-4">
        <div className="text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
