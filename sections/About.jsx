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
        className="text-primary-black font-bold mt-[18px] text-[18px] sm:text-[28px]" 
        variants={fadeIn("up", "tween", 0.2, 1)}>
        フレンチブルドッグはネーミングからもわかるようにフランスで生まれた犬種です
        フレンチブルドッグの歴史フレンチブルドッグの起源については多くの説があります。<br/>祖先犬はイギリスからフランスへの移住者たちが連れてきたイングリッシュ・ブルドッグという説とスペインからのマスティフ犬がイギリスからフランスへ渡ったという説があり、特定されていません。<br />
        いずれにしても、他国原産の犬種がフランスに渡り、フランスでパグやテリアと交配し、祖先犬をより小型化したのがフレンチブルドッグです。
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg" 
        alt="arrow-down" 
        className="w-[18px] h-[30px] mt-[44px] object-contain text-black"/>
    </motion.div>
  </section>
);

export default About;
