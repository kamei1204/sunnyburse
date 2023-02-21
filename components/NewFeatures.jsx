"use client";

import styles from "../styles";

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <>
    <div className="flex flex-1 flex-col sm:max-w-[250px] min-w-[210px]">
      <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5b]`}>
        <img src={imgUrl} alt="イメージ" className="w-1/2 h-1/2 object-contain" />
      </div>
      <h1 className="font-bold text-[24px] mt-[26px] leading-[30px]">{title}</h1>
      <p className="flex-1 mt-[16px] font-normal text-[18px] leading-[32px]">{subtitle}</p>
    </div>
  </>
);

export default NewFeatures;
