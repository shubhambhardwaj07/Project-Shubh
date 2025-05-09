import React from "react";
import { LoaderText } from "../LoaderText/LoaderText";
import { AnimatePresence } from "framer-motion";
import styles from "./InitialLoader.module.scss";

export const InitialLoader = () => {
  return (
    <div className={styles.loadingContainer}>
      <AnimatePresence>
        <LoaderText />
      </AnimatePresence>
    </div>
  );
};
