import leaves from "../../../assets/HomeCompImg/HowMade/sketch.png";
import CircalOut from "../../../assets/HomeCompImg/HowMade/Ellipse2.png";
import CircalIn from "../../../assets/HomeCompImg/HowMade/Ellipse1.png";
import CoffeeCup from "../../../assets/HomeCompImg/HowMade/CoffeeCup.png";
import Made1 from "../../../assets/HomeCompImg/HowMade/coffeemachine.png";
import Made2 from "../../../assets/HomeCompImg/HowMade/coff.png";
import Made3 from "../../../assets/logo.png";
import Made4 from "../../../assets/HomeCompImg/HowMade/HeandBnans.png";
import BaseLine from "../../Layout/BaseLine";
import { motion } from "motion/react";

const HowMade = () => {
  return (
    <section className="relative py-32">
      <img
        src={leaves}
        alt=""
        className="absolute top-0 left-0 -mt-20 h-60 sm:h-96 2xl:h-f"
      />
      <img
        src={leaves}
        alt=""
        className="absolute right-0 bottom-5 rotate-180 sm:-mb-20 -mb-12 h-60 sm:h-96 2xl:h-f "
      />
      <div className="container relative">
        {/* Hadeing  */}
        <div className=" flex flex-col items-center space-y-5">
          <h1 data-aos="fade-up" className="text-center font-bold sm:text-5xl text-3xl tracking-wider">
            How We Made Coffee
          </h1>
          <BaseLine />

          {/* Grid div  */}
          <div className="grid grid-cols-1 xl:grid-cols-3 pt-10 2xl:gap-x-10 ">
            {/* Centar Div  */}
            <div data-aos="zoom-in" className="relative flex items-center justify-center order-1 xl:order-2 ">
              <img src={CircalOut} alt="" className=" Rspin scale-110" />
              <img
                src={CircalIn}
                alt=""
                className=" 2xl:p-4 absolute 2xl:h-96 xl:h-64 fastspin scale-50"
              />
              <motion.img
                src={CoffeeCup}
                alt="Coffee Cup"
                initial={{ opacity: 0, rotate: 80  }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.4 , ease: "easeOut" }}
                whileHover={{ scale: 1.5, rotate: 15 }} // Hover Effect
                className="absolute scale-15 cursor-pointer"
              />
            </div>
            {/* Left Div  */}

            <div data-aos="fade-left" data-aos-delay="100" data-duration="1000" className="flex-col flex justify-between xl:p-8 p-5 order-2 xl:order-1 gap-y-12 text-center sm:text-left mx-auto ">
              <div className="xl:text-right xl:flex flex-col xl:items-end text-sm 2xl:text-base">
                <img src={Made1} alt="" className="mx-auto sm:mx-0" />
                <h1 className="font-bold text-2xl sm:text-3xl pb-3">
                  Italy Modern Machine
                </h1>
                <p>
                  Experience the perfect blend of Italian craftsmanship and
                  modern innovation in every cup.
                </p>{" "}
              </div>
              <div className="xl:text-right xl:flex flex-col xl:items-end text-sm 2xl:text-base">
                <img src={Made2} alt="" className="mx-auto sm:mx-0" />
                <h1 className="font-bold text-2xl sm:text-3xl pb-3">Premium Taste</h1>
                <p>
                  Experience the perfect blend of Italian craftsmanship and
                  modern innovation in every cup.
                </p>{" "}
              </div>
            </div>
            {/* Right DIv  */}
            <div  data-aos="fade-right" data-aos-delay="100" data-duration="1000" className="flex-col flex sm:justify-between lg:p-8 p-5 order-3 text-center sm:text-left justify-center items-center gap-y-12">
              <div className="sm:items-start flex items-center justify-center flex-col text-sm 2xl:text-base">
                <img src={Made3} alt="" />
                <h1 className="font-bold text-2xl sm:text-3xl pb-3">The Perfect Cup</h1>
                <p>
                  Experience the perfect blend of Italian craftsmanship and
                  modern innovation in every cup.
                </p>{" "}
              </div>
              <div className="sm:items-start flex items-center justify-center flex-col text-sm 2xl:text-base">
                <img src={Made4} alt="" />
                <h1 className="font-bold text-2xl sm:text-3xl pb-3">Supreme Beans</h1>
                <p>
                  Experience the perfect blend of Italian craftsmanship and
                  modern innovation in every cup.
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowMade;
