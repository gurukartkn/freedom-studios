import Image from "next/image";

import Branding from "../public/assets/branding.png";

const Hero = () => {
  return (
    <div className="h-[75vh] w-full bg-[url('../public/assets/hero.jpg')] bg-cover bg-center relative text-white">
      <div className="h-[75vh] w-[100vw] bg-gray-900 bg-opacity-90 p-10 lg:p-20 text-center lg:text-left">
        <Image src={Branding} alt="branding"></Image>
        <div className="mt-20 md:mt-36 flex flex-col gap-5 xl:gap-8 justify-center items-center lg:justify-start lg:items-start lg:max-w-md xl:max-w-xl">
          <h3 className="font-medium text-2xl">FIRST SEMESTER</h3>
          <h1 className="font-bold text-5xl xl:text-6xl xl:font-extrabold">
            FREEDOM STUDIOS ACADEMY
          </h1>
          <p className="font-thin text-lg xl:text-xl">
            Taking the message of freedom to the end of the earth through media
            and representing christ in every way.
          </p>
          <p className="rounded-full bg-red-600 p-4 shadow-lg text-xs sm:text-md xl:text-xl md:max-w-sm">
            SELECT A MEMBERSHIP PLAN
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
