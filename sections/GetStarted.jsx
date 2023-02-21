'use client';

import styles from "../styles";
import { motion } from "framer-motion";
import { planetVariants, slideIn, staggerContainer, textVariant, textVariant2 } from "../utils/motion";
import { TitleText, TypingText } from "../components/CustomTexts";
import { startingFeatures } from "../constants";
import StartSteps from "../components/StartSteps";

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div 
      variants={staggerContainer} 
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: false, amount: 0.25 }} 
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}>
      <motion.div
        variants={planetVariants("left")} className={`${styles.flexCenter} flex-1`}>
        <img src="/sunny.png" alt="get-started" className="h-[90%] w-[90%] object-contain"/>
      </motion.div>
      <motion.div>
        <TypingText title="|フレブルが愛される理由は?" />
        <TitleText title={<>フレブルの魅力</>}/>
        <div className="mt-[31px] flex flex-col gap-[24px] max-w-[370px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps key={feature.id} number={index + 1} text={feature}/>
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
