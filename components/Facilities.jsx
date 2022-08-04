import Image from "next/image";

import { AiOutlineCheck } from "react-icons/ai";

import { motion } from "framer-motion";

import Facility from "../public/assets/facility.png";

const Facilities = () => {
  return (
    <div className="snap-start bg-gray-700 p-10 lg:p-20 text-white text-center h-[50vh] md:flex md:text-left md:gap-5 md:items-center ">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, type: "spring" }}
        className="xl:w-1/2"
      >
        <Image src={Facility} alt="facility"></Image>
      </motion.div>
      <div>
        <motion.h3
          initial={{ x: 10, scale: 0.5, opacity: 0 }}
          whileInView={{ x: 0, scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 1, type: "spring" }}
          className="font-medium lg:font-bold lg:text-lg xl:text-xl"
        >
          FACILITIES
        </motion.h3>
        <motion.h2
          initial={{ x: 10, scale: 0.5, opacity: 0 }}
          whileInView={{ x: 0, scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1, type: "spring" }}
          className="text-2xl font-bold lg:text-3xl lg:font-extrabold xl:text-5xl"
        >
          WORLD CLASS TRAINING
        </motion.h2>
        <motion.div
          initial={{ x: 10, scale: 0.5, opacity: 0 }}
          whileInView={{ x: 0, scale: 1, opacity: 1 }}
          transition={{ delay: 2, duration: 0.5, type: "spring" }}
          className="mt-3 items-center flex justify-center md:justify-start gap-1 xl:text-lg xl:mt-5 xl:mb-5"
        >
          <AiOutlineCheck />
          ACCESS TO WIFI
        </motion.div>
        <motion.div
          initial={{ x: 10, scale: 0.5, opacity: 0 }}
          whileInView={{ x: 0, scale: 1, opacity: 1 }}
          transition={{ delay: 2.25, duration: 0.5, type: "spring" }}
          className="items-center flex justify-center md:justify-start gap-1 xl:text-lg xl:mb-5"
        >
          <AiOutlineCheck />
          FULLY AIRCONDITIONED
        </motion.div>
        <motion.div
          initial={{ x: 10, scale: 0.5, opacity: 0 }}
          whileInView={{ x: 0, scale: 1, opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5, type: "spring" }}
          className="items-center flex justify-center md:justify-start gap-1 xl:text-lg xl:mb-5"
        >
          <AiOutlineCheck />
          OVER 100 CLASSES
        </motion.div>
      </div>
    </div>
  );
};

export default Facilities;
