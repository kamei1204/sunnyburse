'use client';

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const InsightCard = ({ imgUrl, title, subtitle, index}) => (
  
    <motion.div
    variants={fadeIn('up','spring',index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4">
      <img src={imgUrl} alt="" className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"/>
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col md:ml-[26px] flex-1 max-w-[650px]">
          <h4 className="font-normal text-[16px] lg:text-[26px] mt-[20px] text-primary-black">{title}</h4>
          <p className="font-normal text-[12px] lg:text-[20px] text-gray-500 mt-[10px]">{subtitle}</p>
        </div>
        <div className="hidden lg:flex items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-black">
          <img src="/icon.png" alt="icon" className="w-[40%] h-[40%] object-contain text-black"/>
        </div>
      </div>
    </motion.div>
);

export default InsightCard;
