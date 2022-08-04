import Image from "next/image";

import { motion } from "framer-motion";

import LeaderImage from "../public/assets/man.png";

const Leader = () => {
  return (
    <div className="snap-end bg-gray-800 p-10 lg:p-20 text-white text-center h-[50vh] md:flex md:text-left md:gap-5 md:items-center ">
      <div className="xl:pr-36 xl:w-1/2 mb-5">
        <motion.h3
          initial={{ x: 10, scale: 0.5, opacity: 0 }}
          whileInView={{ x: 0, scale: 1, opacity: 1 }}
          transition={{ delay: 2.75, duration: 1, type: "spring" }}
          className=" lg:font-bold lg:text-lg xl:text-xl"
        >
          MEET OUR LEADER
        </motion.h3>
        <motion.h2
          initial={{ x: 10, scale: 0.5, opacity: 0 }}
          whileInView={{ x: 0, scale: 1, opacity: 1 }}
          transition={{ delay: 3.25, duration: 1, type: "spring" }}
          className="text-3xl font-bold lg:text-3xl lg:font-extrabold xl:text-5xl"
        >
          LORD JOSH
        </motion.h2>
        <motion.div
          initial={{ x: 10, scale: 0.5, opacity: 0 }}
          whileInView={{ x: 0, scale: 1, opacity: 1 }}
          transition={{ delay: 3.5, duration: 0.5, type: "spring" }}
          className="mt-3 items-center flex justify-center md:justify-start gap-1 xl:text-lg xl:mt-5 xl:mb-5"
        >
          He is an oscar award scriptwritter, director of a movie titles sons of
          sceva. He is a farher of a beautiful daughter and the huband of Mrs
          olan.
        </motion.div>
      </div>
      <motion.div
        initial={{ x: 10, scale: 0.5, opacity: 0 }}
        whileInView={{ x: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 3.75, duration: 1, type: "spring" }}
      >
        <Image src={LeaderImage} alt="facility"></Image>
      </motion.div>
    </div>
  );
};

export default Leader;
