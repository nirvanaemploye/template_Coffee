import CoffeeCup from "../../../assets/AboutCompImg/Mission.png";
import PrimaryButton from "../../Layout/PrimaryButton";
import Circal from "../../../assets/HomeCompImg/HowMade/Ellipse2.png";

const OurMission = () => {
  return (
    <section className="py-12 sm:py-32">
      <div className="container flex flex-col lg:flex-row items-center gap-x-12 gap-y-5 relative">
        
        {/* Image Section */}
        <div data-aos="fade" className="lg:w-2/5 p-3 relative flex justify-center items-center">
          <img src={Circal} alt="Background Circle" className="absolute w-10/12 Rspin" />
          <img 
            src={CoffeeCup} 
            alt="Coffee Cup" 
            className="object-cover w-4/5 spin relative z-10 "
          />
        </div>

        {/* Text Content Section */}
        <div className="pt-10 px-1 lg:w-3/5 space-y-5 md:space-y-8 text-center lg:text-left">
          <p data-aos="fade-up" className="text-xl sm:text-3xl font-bold text-primary uppercase">Our Mission</p>
          <h1 data-aos="fade-up" className="font-bold text-3xl sm:text-[44px] leading-tight">
            We source coffee from all over the world from farmers we know and trust
          </h1>
          <p data-aos="fade-up" className="sm:text-lg text-black/50 tracking-wider">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet leo sit amet ante luctus feugiat. 
            Nulla non bibendum augue, sed tempor dui. Nam dui risus, varius sed luctus vitae, accumsan ac nibh. 
            Curabitur et eleifend metus, efficitur fermentum justo.
          </p>
          <PrimaryButton className="text-white border hover:scale-105 duration-300 transition">
            Read More
          </PrimaryButton>
        </div>
        
      </div>
    </section>
  );
};

export default OurMission;
