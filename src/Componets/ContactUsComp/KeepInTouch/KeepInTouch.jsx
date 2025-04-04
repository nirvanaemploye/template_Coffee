import FramImg from "../../../assets/ContactUsCompImg/Fram.png"
import PrimaryButton from "../../Layout/PrimaryButton";
const KeepInTouch = () => {
  return (
    <section className="sm:py-36 py-10 ">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-10">
          <div className="2xl:space-y-7 space-y-5 xl:order-1 order-2 px-4 sm:px-10 lg:px-20 xl:px-8 ">
            <h1 data-aos="fade-right" className="text-3xl font-bold text-primary">KEEP IN TOUCH</h1>
            <p data-aos="fade-right" className="2xl:text-xl tracking-widest text-black/40">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet leo sit amet ante luctus feugiat. Null a non bibendum augue, sed tempor dui. Nam dui risus, varius sed luctus vitae, accumsan. </p>
            <div className="2xl:space-y-6 space-y-4 flex flex-col sm:pe-5 items-end">
                <input  data-aos="fade-right" type="text" placeholder="Enter Your Name" className="bg-[#f2f2f2] w-full p-4"/>
                <input  data-aos="fade-right" type="tel" pattern="[0-9]{2}-[0-9]{5}" placeholder="Enter Your Phone Number" className="bg-[#f2f2f2] w-full p-4"/>
                <input  data-aos="fade-right" type="email" placeholder="Enter Your Email " className="bg-[#f2f2f2] w-full p-4"/>
                <textarea  data-aos="fade-right" rows={6} placeholder="Message" className="resize-none w-full text-lg bg-[#f2f2f2] p-4"/>
                <PrimaryButton className=" border text-white">Submit</PrimaryButton>
            </div>
          </div>
          <div data-aos="zoom-out" className="flex justify-center items-center order-1 xl:order-2">
            <img src={FramImg} alt="" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeepInTouch;
