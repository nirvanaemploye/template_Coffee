import { AiFillGoogleCircle } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import userImage from "../../../assets/HomeCompImg/dhruv.png"; // Replace with actual path
import ComaImg from "../../../assets/HomeCompImg/TestimonialsImg/invertedcommasN.png"; // Replace with actual path

const JustTry = () => {
  return (
    <div className="relative w-full max-w-md mx-auto bg-white shadow-lg rounded-xl p-8">
      {/* Quotation Mark */}
      <img src={ComaImg} alt="Quote" className="w-10 absolute top-6 left-6" />

      {/* Testimonial Text */}
      <p className="text-gray-700 text-center text-lg leading-relaxed mt-6">
        “ Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled ”
      </p>

      {/* Bottom Section with Image Overlay */}
      <div className="relative mt-8">
        <div className="w-full bg-orange-500 h-20 rounded-b-xl"></div>
        
        {/* User Image */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-10">
          <img 
            src={userImage} 
            alt="Neil Wilford" 
            className="w-20 h-20 rounded-full border-4 border-white shadow-md"
          />
        </div>

        {/* User Name */}
        <p className="text-center text-white font-bold text-lg mt-8">NEIL WILFORD</p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mt-2">
          <AiFillGoogleCircle className="text-white text-2xl" />
          <MdFacebook className="text-white text-2xl" />
          <RiWhatsappFill className="text-white text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default JustTry;
