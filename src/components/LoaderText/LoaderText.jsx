import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./LoaderText.module.scss";

const phrases = ["From", "To", "To"];
const subtexts = ["Nothing", "Something", "Everything"];

export const LoaderText = () => {
  return (
    <AnimatePresence>
      <div className={styles.loaderTextContainer}>
        {phrases.map((phrase, index) => (
          <div className={styles.section} key={index}>
            <motion.div
              className={styles.textWrapper}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * 1, // Delay for each word
                duration: 1,
                ease: "easeIn",
              }}
            >
              <div className={styles.bigText}>{phrase}</div>
              <div className={styles.smallText}>{subtexts[index]}</div>
              {index < phrases.length && index > 0 && (
                <motion.div
                  className={styles.separator}
                  initial={{ height: 0 }}
                  animate={{ height: "100vh" }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </AnimatePresence>
  );
};
