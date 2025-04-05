import PrimaryButton from "../../Layout/PrimaryButton";
import AddressBg from "../../../assets/ServiceCompImg/AddressBg.png";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";

const AddBg = {
  backgroundImage: `url(${AddressBg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  backgroundSize: "cover",
};

const Address = () => {
  return (
    <section className="py-32" style={AddBg}>
      <div className="container text-white">
        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-20 ">
          {/* Contact Us Card */}
          <div
            data-aos="zoom-in"
            className="lg:border-e border-dashed border-white/70 font-thin flex flex-col items-center justify-center space-y-8 tracking-widest"
          >
            <p className="flex flex-col items-center text-2xl uppercase tracking-widest font-extralight text-primary">
              {" "}
              <span>
                <IoCallOutline className=" text-primary text-8xl font-extralight mb-6" />
              </span>
              Contact Us
            </p>
            <div className="text-lg sm:text-[22px] text-center items-center flex flex-col font-thin text-white/90">
              <p> +126-798-756</p>
              <p>coffeecafe@example.com</p>
            </div>
            <PrimaryButton className="border border-primary group-hover:bg-transparent hover:text-black">
              Contact Us
            </PrimaryButton>
          </div>
          {/* Address Card */}
          <div
            data-aos="zoom-in"
            className="font-thin flex flex-col items-center justify-center space-y-8 tracking-widest "
          >
            <p className="flex flex-col items-center text-2xl uppercase tracking-widest font-extralight text-primary">
              {" "}
              <span>
                <IoLocationOutline className=" text-primary text-8xl font-extralight mb-6" />
              </span>
              ADDRESS
            </p>
            <div className="text-lg sm:text-[22px] text-center items-center flex flex-col font-thin text-white/90">
              <p>66 Dennie Road, Behind </p>
              <p>Starbucks , VJ City, Paris, 5010</p>
            </div>
            <PrimaryButton className="border border-primary hover:bg-transparent hover:text-black">
              Get Direction
            </PrimaryButton>
          </div>
          {/* Opening Hours Card */}
          <div
            data-aos="zoom-in"
            className="lg:border-s border-dashed border-white/70 font-thin flex flex-col items-center justify-center space-y-8 tracking-widest"
          >
            <p className="flex flex-col items-center text-2xl uppercase tracking-widest font-extralight text-primary">
              {" "}
              <span>
                <CiClock2 className=" text-primary text-8xl font-extralight mb-6" />
              </span>
              OPENING HOURS
            </p>
            <div className="text-lg sm:text-[22px] text-center items-center flex flex-col font-thin text-white/90">
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
