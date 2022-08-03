import Image from "next/image";

import LeaderImage from "../public/assets/man.png";

const Leader = () => {
  return (
    <div className="bg-gray-800 p-10 lg:p-20 text-white text-center h-[50vh] md:flex md:text-left md:gap-5 md:items-center ">
      <div className="xl:pr-36 xl:w-1/2 mb-5">
        <h3 className=" lg:font-bold lg:text-lg xl:text-xl">MEET OUR LEADER</h3>
        <h2 className="text-3xl font-bold lg:text-3xl lg:font-extrabold xl:text-5xl">
          LORD JOSH
        </h2>
        <div className="mt-3 items-center flex justify-center md:justify-start gap-1 xl:text-lg xl:mt-5 xl:mb-5">
          He is an oscar award scriptwritter, director of a movie titles sons of
          sceva. He is a farher of a beautiful daughter and the huband of Mrs
          olan.
        </div>
      </div>
      <Image src={LeaderImage} alt="facility"></Image>
    </div>
  );
};

export default Leader;
