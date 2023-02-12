'use client';

import styles from "../styles";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant, textVariant2 } from "../utils/motion";


const Hero = () => (
  <section className={`${styles.yPaddings} `}>
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
      <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      className="w-full relative -mt-[-12px] md:-mt-[20px]"
      >
        <div className="w-full h-[250px] absolute -top-[20px] rounded-tl-[130px] hero-gradient z-[0]" />
          <img 
            src="/cover.png" 
            alt="cover" 
            className="sm:h-[400px] h-[250px] relative rounded-tl-[130px] object-cover w-full z-10"/>
        <a href="#explore">
          <div className=" relative flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] z-10">
            <img src="/stamp.png" alt="" className="sm:h-[150px] sm:w-[150px] h-[100px] w-[100px] object-contain"/>
          </div>
        </a>

      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
