import Image from "next/image";

import { AiOutlineCheck } from "react-icons/ai";

import Facility from "../public/assets/facility.png";

const Facilities = () => {
  return (
    <div className="bg-gray-700 p-10 lg:p-20 text-white text-center h-[50vh] md:flex md:text-left md:gap-5 md:items-center ">
      <div className="xl:w-1/2">
        <Image src={Facility} alt="facility"></Image>
      </div>
      <div>
        <h3 className="font-medium lg:font-bold lg:text-lg xl:text-xl">
          FACILITIES
        </h3>
        <h2 className="text-2xl font-bold lg:text-3xl lg:font-extrabold xl:text-5xl">
          WORLD CLASS TRAINING
        </h2>
        <div className="mt-3 items-center flex justify-center md:justify-start gap-1 xl:text-lg xl:mt-5 xl:mb-5">
          <AiOutlineCheck />
          ACCESS TO WIFI
        </div>
        <div className="items-center flex justify-center md:justify-start gap-1 xl:text-lg xl:mb-5">
          <AiOutlineCheck />
          FULLY AIRCONDITIONED
        </div>
        <div className="items-center flex justify-center md:justify-start gap-1 xl:text-lg xl:mb-5">
          <AiOutlineCheck />
          OVER 100 CLASSES
        </div>
      </div>
    </div>
  );
};

export default Facilities;
