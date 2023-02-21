'use client';

import styles from "../styles";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}>
      <motion.div
      variants={fadeIn("right", "tween", 0.2, 1)}
      className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative">
      <div className="feedback-gradient"/>
      <div>
        <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px]">Sunny Kamei</h4>
        <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px]">Brindle | man</p>
      </div>
      <p className="mt-[24px] font-normal sm:text-[20px] text-[16px] sm:leading-[45px] leading-39px">
      温厚な性格で、吠えることも少なめのフレンチブルドッグ。お留守番も得意なので、共働き世帯の方にも向いているかもしれません。運動量も多くは必要としないので、時間があるときに、おしゃれでかわいい服を着せてお散歩、といった都会的な飼い方も楽しめますよ。<br />
      ＊今回のモデル＊ サニーくん
      </p>
      </motion.div>
      <motion.div
      variants={fadeIn('left','tween',0.2,1)}
      className="relative flex-1 flex justify-center items-center">
        <img src="/sunny2.png" alt="" className="w-full lg:h-[700px] h-auto min-h-[220px] object-cover rounded-[40px]" />
      </motion.div>
      <motion.div
      variants={zoomIn(0.4,1)}
      className="hidden lg:block absolute top-[3%] left-[30%] ">
        <img src="/stamp.png" alt="stamp" className="h-[155px] w-[155px] object-contain"/>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
