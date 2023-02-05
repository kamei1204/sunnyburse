'use client';

import styles from "../styles";
import { motion } from "framer-motion";
import { staggerContainer, textVariant, textVariant2 } from "../utils/motion";


const Hero = () => (
  <section className={`${styles.yPaddings} pl-6 sm:pl-16`}>
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25, }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <div className="flex flex-col justify-center items-center relative z-10">
        <motion.h1
          variants={textVariant(1.1)}
          className={`${styles.heroHeading}`}>
            BUHIBUHI
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex justify-center items-center">
          <h1 className={`${styles.heroHeading}`}>Bu</h1>
          <img src="/sunny.png" alt="犬" className="h-[120px] w-[120px] object-contain text-white"/>
          <h1 className={`${styles.heroHeading}`}>LuDog</h1>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
