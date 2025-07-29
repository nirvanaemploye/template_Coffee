import FavouriteBg from "../../../assets/HomeCompImg/FavouriteImg/FevBg.png";
import fevcoffee from "../../../assets/HomeCompImg/FavouriteImg/FevCoffee.png";
import BaseLine from "../../Layout/BaseLine";

const FevouriteList = [
  {
    id: 1,
    img: fevcoffee,
    name: "Caffe Latte",
    description: "Fresh brewed coffee and steamed milk",
    price: "$2.95",
  },
  {
    id: 2,
    img: fevcoffee,
    name: "Caffe Latte",
    description: "Fresh brewed coffee and steamed milk",
    price: "$2.95",
  },
  {
    id: 3,
    img: fevcoffee,
    name: "Caffe Latte",
    description: "Fresh brewed coffee and steamed milk",
    price: "$2.95",
  },
  {
    id: 4,
    img: fevcoffee,
    name: "Caffe Latte",
    description: "Fresh brewed coffee and steamed milk",
    price: "$2.95",
  },
  {
    id: 1,
    img: fevcoffee,
    name: "Caffe Latte",
    description: "Fresh brewed coffee and steamed milk",
    price: "$2.95",
  },
  {
    id: 2,
    img: fevcoffee,
    name: "Caffe Latte",
    description: "Fresh brewed coffee and steamed milk",
    price: "$2.95",
  },
  {
    id: 3,
    img: fevcoffee,
    name: "Caffe Latte",
    description: "Fresh brewed coffee and steamed milk",
    price: "$2.95",
  },
  {
    id: 4,
    img: fevcoffee,
    name: "Caffe Latte",
    description: "Fresh brewed coffee and steamed milk",
    price: "$2.95",
  },
];

const style = {
  backgroundImage: `url(${FavouriteBg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  backgroundSize: "cover",
};

const Favourite = () => {
  return (
    <section className="py-32 text-white bg-cover bg-right" style={style}>
      <div className="container mx-auto px-6">
        <div  className="flex flex-col items-center space-y-8 justify-center">
          <h1 data-aos="fade" data-aos-delay="0" className="text-center font-bold sm:text-5xl text-3xl tracking-wider">
            Favourite Coffee Flavours
          </h1>
          <BaseLine />
          <div className="lg:container grid grid-cols-1 xl:grid-cols-2 gap-12 w-full container ">
            {FevouriteList.map((data, index) => (
              <div
                key={index}
                className="cursor-pointer flex items-center justify-between w-full group relative hover:scale-105 duration-300 transition "
              >
                <div  className="items-center justify-cente  mx-auto">
                  <div data-aos="fade-up" data-aos-delay="500" data-aos-once="true" className="flex justify-center items-center gap-4">
                    <img src={data.img} alt={data.name} className="" />
                    <div className="space-y-3">
                      <div className="flex">
                        <p className="lg:text-[24px] tracking-widest font-semibold">
                          {data.name}
                        </p>
                      </div>
                      <p className="text-primary tracking-widest xl:text-lg hidden sm:block">
                        {data.description}
                      </p>
                    </div>
                    <span className="md:text-4xl text-2xl font-bold">
                      {data.price}
                    </span>
                  </div>
                  <div className=" h-0.5 bg-primary flex mt-1 w-0 transition-all group-hover:w-full mx-auto max-w-xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favourite;
