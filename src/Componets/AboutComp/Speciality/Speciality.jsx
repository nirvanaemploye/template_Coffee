import BaseLine from "../../Layout/BaseLine";
import TopImg from "../../../assets/AboutCompImg/Speciality/Top.png";
import BottomImg from "../../../assets/AboutCompImg/Speciality/Bottom.png";
import Img1 from "../../../assets/AboutCompImg/Speciality/S1.png";
import Img2 from "../../../assets/AboutCompImg/Speciality/S2.png";
import Img3 from "../../../assets/AboutCompImg/Speciality/S3.png";
import PrimaryButton from "../../Layout/PrimaryButton";

const products = [
  {
    id: 1,
    name: "CARAMEL MACCHIATO",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    image: Img1,
  },
  {
    id: 2,
    name: "CHOCOLATE CHIPS COOKIE",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    image: Img2,
  },
  {
    id: 3,
    name: "HOT CHOCOLATE",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    image: Img3,
  },
];

const Speciality = () => {
  return (
    <section className="py-12 sm:py-32 relative bg-white">
      {/* Positioned Background Images */}
      <img src={TopImg} alt="" className="absolute top-0 right-0  " />
      <img src={BottomImg} alt="" className="absolute bottom-0 left-0 " />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <h1 data-aos="fade" className="font-bold text-3xl sm:text-5xl tracking-wider">Our Speciality</h1>
          <BaseLine />
          <p data-aos="fade-up" className="w-10/12 md:w-9/12 sm:text-lg text-black/50 tracking-widest">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry’s standard dummy text since the 1500s.
          </p>
        </div>

        {/* Products Grid */}
        <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-5 pt-10">
          {products.map((product) => (
            <div data-aos="zoom-in" key={product.id} className="sm:p-5 hover:shadow-md group">
              {/* Product Image */}
              <div className="bg-gray-100 flex justify-center aspect-w-1 aspect-h-1 h-64 w-full p-5">
                <img src={product.image} alt={product.name} className="flex m-8 max-h-full object-contain group-hover:scale-110 duration-300 translation" />
              </div>
              
              {/* Product Info */}
              <div className="text-left space-y-6 py-6 ">
                <p className="font-bold text-xl">{product.name}</p>
                <p className="tracking-widest text-gray-600">{product.description}</p>
                
                {/* Read More Button */}
                <PrimaryButton className="hover:text-primary hover:bg-transparent border border-primary bg-primary text-white">
                  Read More
                </PrimaryButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speciality; 