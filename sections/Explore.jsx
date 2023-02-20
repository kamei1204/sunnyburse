'use client';
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import styles from "../styles"
import { TitleText, TypingText } from "../components/CustomTexts";
import { exploreWorlds } from "../constants";
import { useState } from "react";
import Card from "../components/Card";

const ExploreCard = () => {

  const [active, setActive] = useState("world-2");

  return(
  <section className={`${styles.paddings} relative`}id="explore">
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once : false, amount : 0.25 }}
    className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title=" | フレブルにも種類があるの？ " textStyles="text-center"/>
      <TitleText  
        title={<> The FrenchBullDog</>}
        textStyles="text-center"/>
      <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
        {exploreWorlds.map((world,index) => (
          <Card 
          key={world.id}
          {...world}
          index={index}
          active={active}
          handleClick={setActive}/>
          ))}
      </div>
    </motion.div>
  </section>
  )
};

export default ExploreCard;
