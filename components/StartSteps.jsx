"use client";

import styles from "../styles";

const StartSteps = ({ number, text }) => (
  <>
    <div className={`${styles.flexCenter} flex-row`}>
      <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5b]`}>
        <p className="font-bold text-white text-[20px]">0{number}</p>
      </div>
      <p className="flex-1 ml-[30px] font-normal text-[#b0b0b0] text-[18px] leading-[32px]">{text}</p>
    </div>
  </>
);

export default StartSteps;
