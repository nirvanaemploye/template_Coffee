import BaseLine from "../../Layout/BaseLine";
import top1 from "../../../assets/AboutCompImg/GalleryImg/Top1.png";
import top2 from "../../../assets/AboutCompImg/GalleryImg/Top2.png";
import top3 from "../../../assets/AboutCompImg/GalleryImg/Top3.png";
import Bootom1 from "../../../assets/AboutCompImg/GalleryImg/Bo1.png";
import Bootom2 from "../../../assets/AboutCompImg/GalleryImg/Bo2.png";
import Bootom3 from "../../../assets/AboutCompImg/GalleryImg/Bo3.png";
import Bootom4 from "../../../assets/AboutCompImg/GalleryImg/Bo4.png";

const Gallery = () => {
  return (
    <section className="py-5 md:py-12 overflow-visible">
      <div className="">
        <div className="flex flex-col items-center sm:space-y-10 space-y-5">
          <h1 data-aos="fade" className="text-center font-bold text-3xl sm:text-5xl tracking-wider ">
            Our Gallery
          </h1>
          <BaseLine />
          <div data-aos="fade" className=" mx-auto bg-black">
            <div  className="flex">
              <div className=" relative mx-auto  overflow-hidden hidden lg:block">
                <img
                  src={top1}
                  alt=""
                  className=" relative z-0 duration-500 hover:scale-110"
                />
              </div>
              <div className=" relative mx-auto overflow-hidden">
                <img
                  src={top2}
                  alt=""
                  className=" relative z-0 duration-500 hover:scale-110"
                />
              </div>
              <div className=" relative mx-auto  overflow-hidden">
                <img
                  src={top3}
                  alt=""
                  className="relative z-0 duration-500 hover:scale-110 hidden sm:block"
                />
              </div>
              {/* <img src={top2} alt="" className="hover:scale-110 duration-500" />
              <img src={top3} alt="" className="hover:scale-110 duration-500" /> */}
            </div>
            <div className="flex flex-row ">
              <div className=" relative mx-auto overflow-hidden">
              <img
                src={Bootom1}
                alt=""
                className="hidden lg:inline-block hover:scale-110 duration-500"
              />
              </div>
              <div className=" relative mx-auto  overflow-hidden">
              <img
                src={Bootom2}
                alt=""
                className="xl:hidden 2xl:inline-block hover:scale-110 duration-500"
              />
              </div>
              <div className=" relative mx-auto  overflow-hidden">
              <img
                src={Bootom3}
                alt=""
                className="hidden xl:inline-block hover:scale-110 duration-500"
              />
              </div>
              <div className=" relative mx-auto overflow-hidden">
              <img
                src={Bootom4}
                alt=""
                className="hover:scale-110 duration-500"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
