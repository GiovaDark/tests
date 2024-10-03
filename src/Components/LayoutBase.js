import React from "react";
import { motion } from "framer-motion";
import  random  from "random";

const LayoutBase = ({ titoloH1, isImprev, casuale, children }) => {
  return (
    <section
      className="flex h-[100dvh] w-full select-none flex-col items-center justify-start gap-2 px-4 py-6 font-bold md:justify-around md:p-8"
      /* style={
        !casuale
          ? { justifyContent: "space-around" }
          : { justifyContent: "space-around" }
      } */
    >
      {/* BOX PRIMA ESTRAZIONE */}
      <h1>{titoloH1}</h1>
      <motion.div
        initial={{ opacity: 0, x: "-10vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.4, type: "spring" }}
        key={random.float()}
        id="containerPrimaEstrazione"
        style={isImprev && { color: "var(--clr-ter)" }}
        className="flex h-full w-full select-none flex-col items-center gap-6 md:gap-2 rounded-xl bg-black/50 px-4 py-2 text-center shadow-lg ring ring-inset ring-white/75 md:justify-evenly md:px-10"
      >
        {!casuale && (
          <h2
            style={{ fontFamily: "'Handlee', cursive" }}
            className="flex h-full items-center justify-center text-5xl italic"
          >
            Buzzzz it!...
          </h2>
        )}
        {children}
      </motion.div>
    </section>
  );
};

export default LayoutBase;
