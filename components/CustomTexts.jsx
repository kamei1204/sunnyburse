'use client';

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`${textStyles} text-gray-500 font-serif text-[18px]`}>
      {[...title].map((letter, index) => (
      <motion.span
        key={index}
        variants={textVariant2}>
        {/* \u00A0 改行なしのスペースを表す文字コード*/}
        {letter === "" ? "\u00A0" : letter}
      </motion.span>
  ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2 
  variants={textVariant2} 
  initial="hidden" 
  whileInView="show"
  className={`${textStyles} font-bold text-[35px] md:text-[50px] mt-8 text-primary-black`}>{title}</motion.h2>
);
