import {
  AiTwotoneCalendar,
  AiTwotoneBook,
  AiOutlineFieldTime,
} from "react-icons/ai";

const Benefits = () => {
  return (
    <div className="bg-gray-900 w-full h-[25vh] text-white p-10 lg:p-20 flex flex-wrap  justify-center lg:justify-between items-center">
      <div className="flex flex-wrap gap-1 lg:w-1/5">
        <h3 className="font-bold text-lg md:text-xl xl:text-2xl">MEMBERS</h3>
        <h3 className="font-bold text-lg md:text-xl xl:text-2xl">BENEFITS</h3>
      </div>
      <div className="flex flex-wrap justify-center lg:justify-around gap-3 font-bold text-md lg:w-4/5 lg:text-lg">
        <div className="flex flex-wrap gap-1 items-center lg:max-w-[100px]">
          <AiTwotoneCalendar />
          <h3>2 WEEKS</h3>
          <h3>INTERNSHIP</h3>
        </div>
        <div className="flex flex-wrap gap-1 items-center lg:max-w-[100px]">
          <AiOutlineFieldTime />
          <h3>24/7</h3>
          <h3>MENTORSHIP</h3>
        </div>
        <div className="flex flex-wrap gap-1 items-center lg:max-w-[100px]">
          <AiTwotoneBook />
          <h3>2 FREE</h3>
          <h3>E-BOOKS</h3>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
