'use client';

import styles from "../styles";
import { motion } from "framer-motion";
import { TypingText } from "../components/CustomTexts";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10 `}>
    <div className="gradient-02 z-10"/>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.flexCenter} ${styles.innerWidth} mx-auto flex-col`}>
      <TypingText title="| フレブルの魅力ってなんだろう？" textStyles="text-center"/>
      <motion.p 
        className="text-secondary-white mt-[18px] text-[20px] sm:text-[32px]" 
        variants={fadeIn("up", "tween", 0.2, 1)}>
      <span className="text-white font-extrabold">Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      <span className="text-white font-extrabold">It has survived not only five centuries</span>, but also the leap into electronic typesetting, 
      remaining essentially unchanged. 
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg" 
        alt="arrow-down" 
        className="w-[18px] h-[30px] mt-[44px] object-contain"/>
    </motion.div>
  </section>
);

export default About;
