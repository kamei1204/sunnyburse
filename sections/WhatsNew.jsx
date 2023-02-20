'use client';

import styles from "../styles";
import { fadeIn, planetVariants, staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";
import { NewFeatures, StartSteps, TitleText, TypingText } from "../components";
import { newFeatures } from "../constants";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div 
      variants={staggerContainer} 
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: false, amount: 0.25 }} 
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}>
      <motion.div
        variants={fadeIn('right', 'tween', 0.2,1)}
        className="flex flex-[0.75] justify-center flex-col"
      >
        <TypingText title="|種類についてもっと詳しく" />
        <TitleText title={<>アメリカタイプ<br />ヨーロッパタイプ</>}/>
          <div className="mt-[48px] flex gap-[24px] flex-wrap justify-between">
            {newFeatures.map((feature) => (
              <NewFeatures key={feature.title} {...feature}/>
            ))}
          </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")} className={`${styles.flexCenter} flex-1`}>
        <img src="/sunny.png" alt="get-started" className="h-[90%] w-[90%] object-contain"/>
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
