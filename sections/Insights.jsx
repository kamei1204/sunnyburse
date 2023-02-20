'use client';

import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components/CustomTexts";
import InsightCard from "../components/InsightCard";
import { insights } from "../constants";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once:false, amount: 0.25 }}
    className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <TypingText title="愛犬と仲良しなら出来ること" textStyles="text-center" />
      <TitleText title="あなたとフレブルの関係は大丈夫？" textStyles="text-center"/>
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight,index) => (
          <InsightCard key={`insight-${index}`} {...insight} index={index + 1}/>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
