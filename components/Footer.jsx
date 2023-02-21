'use client';
import { motion } from "framer-motion"; 
import styles from "../styles";
import { footerVariants } from "../utils/motion";
import { socials } from "../constants/index"
import Image from "next/image";

const Footer = () => (
  <motion.footer
  variants={footerVariants}
  initial="hidden"
  whileInView="show"
  className={`${styles.paddings} py-8 relative`}>
    <div className="footer-gradient"/>
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex justify-between items-center gap-5 flex-wrap">
        <h4 className="font-bold md:text-[66px] text-[36px]">フレブルと旅にでよう</h4>
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]">
          <Image src="/headset.svg" alt="headset" height={24} width={24} className="object-contain"/>
          <span className="font-normal text-white">フレブルと旅にでよう</span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="h-[2px] mb-[50px] bg-black opacity-10"/>
        <div className="flex justify-between gap-4 items-center flex-wrap">
          <h4 className="font-extrabold text-[24px]">フレブルライフ</h4>
          <p className="font-normal text-[12px] opacity-50">
            copyright @ 2022~2033 フレブルライフ All rights reserved
          </p>
          <div className="cursor-pointer flex gap-4">
            {socials.map((social) => (
              <Image key={social.name} src={social.url} alt={social.name} height={30} width={30}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
