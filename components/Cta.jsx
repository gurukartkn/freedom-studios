import { motion } from "framer-motion";

const Cta = () => {
  return (
    <div className="snap-start h-[75vh] w-full overflow-x-hidden bg-[url('../public/assets/banner.png')] bg-cover bg-center relative text-white">
      <div className="h-[75vh] w-[100vw] bg-gray-900 bg-opacity-90 p-10 lg:p-20 text-center lg:text-left">
        <motion.div
          initial={{ y: 100, scale: 0.5, opacity: 0 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ delay: 0.25, duration: 1, type: "spring" }}
          className="mt-20 md:mt-36 flex flex-col gap-24 lg:gap-8 justify-center items-center lg:justify-start lg:items-start lg:max-w-md xl:max-w-xl"
        >
          <h3 className="font-medium text-2xl">To join in</h3>
          <h1 className="font-bold text-5xl xl:text-6xl xl:font-extrabold">
            FREEDOM STUDIOS ACADEMY
          </h1>
          <p className="rounded-full bg-red-600 p-4 shadow-lg text-xs sm:text-md xl:text-xl md:max-w-sm">
            SELECT A MEMBERSHIP PLAN
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Cta;
