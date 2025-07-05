import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { transitionVariantPage } from "../utils/transitions";

export const PageTransition = () => {
  return (
    <AnimatePresence mode="wait">
      <div>
        <motion.div className="fixed top-0  bottom-0 right-full w-screen z-30  bg-[#2e2257]" variants={transitionVariantPage} initial='initial' animate='animate' exit='exit' transition={{delay: 0.2, duration: 0.4, ease: 'easeInOut'}}>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
