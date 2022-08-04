import Image from "next/image";

import Branding from "../public/assets/branding.png";

import {
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="snap-end bg-gray-900 w-full h-[25vh] text-white p-10 lg:p-20 flex flex-col gap-10 lg:flex-row justify-center lg:justify-between items-center">
      <div className="flex flex-wrap gap-1">
        <Image src={Branding} alt="branding"></Image>
      </div>
      <div className="flex flex-wrap justify-center lg:justify-end lg:pr-20 gap-3 font-bold text-md lg:text-3xl">
        <AiFillTwitterSquare />
        <AiFillInstagram />
        <AiFillFacebook />
      </div>
    </div>
  );
};

export default Footer;
