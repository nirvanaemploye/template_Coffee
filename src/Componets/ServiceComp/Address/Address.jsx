import PrimaryButton from "../../Layout/PrimaryButton";
import AddressBg from "../../../assets/ServiceCompImg/AddressBg.png";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";

const AddBg = {
  backgroundImage: `url(${AddressBg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

const Address = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-32" style={AddBg}>
      <div className="container text-white px-4 sm:px-6">
        {/* Cards grid */}
        <div className="grid grid-cols-1  xl:grid-cols-3 gap-y-12 sm:gap-y-16 lg:gap-y-20 gap-x-8 lg:gap-x-14">

          {/* Contact Us Card */}
          <div
            data-aos="zoom-in"
            className="xl:border-e border-dashed border-white/70 lg:pr-6 font-thin flex flex-col items-center justify-center space-y-6 sm:space-y-8 tracking-widest"
          >
            <p className="flex flex-col items-center text-xl sm:text-2xl uppercase tracking-widest font-semibold text-primary">
              <IoCallOutline className="text-primary text-5xl sm:text-6xl lg:text-8xl mb-4 sm:mb-6" />
              Contact Us
            </p>
            <div className="text-base sm:text-lg md:text-xl text-center flex flex-col font-thin text-white/90">
              <p>+126-798-756</p>
              <p>coffeecafe@example.com</p>
            </div>
            <PrimaryButton className="border border-primary hover:bg-transparent hover:text-black">
              Contact Us
            </PrimaryButton>
          </div>

          {/* Address Card */}
          <div
            data-aos="zoom-in"
            className="font-thin flex flex-col items-center justify-center space-y-6 sm:space-y-8 tracking-widest"
          >
            <p className="flex flex-col items-center text-xl sm:text-2xl uppercase tracking-widest font-semibold text-primary">
              <IoLocationOutline className="text-primary text-5xl sm:text-6xl lg:text-8xl mb-4 sm:mb-6" />
              Address
            </p>
            <div className="text-base sm:text-lg md:text-xl text-center flex flex-col font-thin text-white/90">
              <p>66 Dennie Road, Behind</p>
              <p>Starbucks, VJ City, Paris, 5010</p>
            </div>
            <PrimaryButton className="border border-primary hover:bg-transparent hover:text-black">
              Get Direction
            </PrimaryButton>
          </div>

          {/* Opening Hours Card */}
          <div
            data-aos="zoom-in"
            className="xl:border-s border-dashed border-white/70 lg:pl-6 font-thin flex flex-col items-center justify-center space-y-6 sm:space-y-8 tracking-widest"
          >
            <p className="flex flex-col items-center text-xl sm:text-2xl uppercase tracking-widest font-semibold text-primary">
              <CiClock2 className="text-primary text-5xl sm:text-6xl lg:text-8xl mb-4 sm:mb-6" />
              Opening Hours
            </p>
            <div className="text-base sm:text-lg md:text-xl text-center flex flex-col font-thin text-white/90">
              <p>Everyday: From 10:00 To 12:00</p>
              <p>Kitchen Closes At 11:00</p>
            </div>
            <PrimaryButton className="border border-primary hover:bg-transparent hover:text-black">
              Reserve a Table
            </PrimaryButton>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Address;
