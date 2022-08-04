import Image from "next/image";

import { motion } from "framer-motion";

import Branding from "../public/assets/branding.png";

const Hero = () => {
  return (
    <div className="snap-start h-[75vh] w-full overflow-x-hidden bg-[url('../public/assets/hero.jpg')] bg-cover bg-center relative text-white">
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-[75vh] w-[100vw] bg-gray-900 bg-opacity-90 p-10 lg:p-20 text-center lg:text-left"
      >
        <Image src={Branding} alt="branding"></Image>
        <div className="mt-20 md:mt-36 flex flex-col gap-5 xl:gap-8 justify-center items-center lg:justify-start lg:items-start lg:max-w-md xl:max-w-xl">
          <motion.h3
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 1, type: "spring" }}
            className="font-medium text-2xl"
          >
            FIRST SEMESTER
          </motion.h3>
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, duration: 1, type: "spring" }}
            className="font-bold text-5xl xl:text-6xl xl:font-extrabold"
          >
            FREEDOM STUDIOS ACADEMY
          </motion.h1>
          <motion.p
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, duration: 1, type: "spring" }}
            className="font-thin text-lg xl:text-xl"
          >
            Taking the message of freedom to the end of the earth through media
            and representing christ in every way.
          </motion.p>
          <motion.p
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2.5, duration: 1, type: "spring" }}
            className="rounded-full bg-red-600 p-4 shadow-lg text-xs sm:text-md xl:text-xl md:max-w-sm"
          >
            SELECT A MEMBERSHIP PLAN
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
