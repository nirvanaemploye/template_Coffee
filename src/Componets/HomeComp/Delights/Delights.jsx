import top from "../../../assets/HomeCompImg/DelightsImg/Top.png";
import bottom from "../../../assets/HomeCompImg/DelightsImg/Bottom.png";
import BaseLine from "../../Layout/BaseLine";
import List1 from "../../../assets/HomeCompImg/DelightsImg/list1.png";
import List2 from "../../../assets/HomeCompImg/DelightsImg/List2.png";
import List3 from "../../../assets/HomeCompImg/DelightsImg/List3.png";
import PrimaryButton from "../../Layout/PrimaryButton";

const products = [
  {
    id: 1,
    name: "Coffee Kettle",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    price: "$40",
    image: List3,
    sale: false,
  },
  {
    id: 2,
    name: "Indian Coffee",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    oldPrice: "$40",
    price: "$50",
    image: List2,
    sale: true,
  },
  {
    id: 3,
    name: "Coffee Machine",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    price: "$40",
    image: List1,
    sale: false,
  },
  {
    id: 4,
    name: "Indian Coffee",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    oldPrice: "$40",
    price: "$50",
    image: List2,
    sale: true,
  },
];

const Delights = () => {
  return (
    <section className="py-32 relative">
      {/* Background Images */}
      <img src={top} alt="Top decoration" className="absolute top-0 right-0" />
      <img src={bottom} alt="Bottom decoration" className="absolute bottom-0" />

      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="flex flex-col items-center space-y-6 text-center">
          <h1 data-aos="fade-up" className="font-bold sm:text-5xl text-3xl tracking-wider">Freshly Brewed Delights</h1>
          <BaseLine />
          <p data-aos="fade-up" className="w-10/12 md:w-9/12 text-lg text-black/60 tracking-wider">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industrys standard since the 1500s.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-20  ">
          {products.map((product) => (
            <div data-aos="zoom-in" key={product.id} className="bg-white group shadow-lg rounded-lg overflow-hidden relative ">
              {product.sale && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-3 py-2 rounded duration-200 translation group-hover:scale-x-125 group-hover:scale-y-110 group-hover:font-bold ">
                  20% off
                </span>
              )}
              
              <div className="bg-gray-100 flex  items-center p-14 h-80 w-full">
                <img src={product.image} alt={product.name} className=" duration-300 translation group-hover:scale-105 mx-auto" />
              </div>

              <div className="p-4 text-center space-y-4">
                <h3 className="text-xl font-semibold group-hover:scale-105 duration-300 translation">{product.name}</h3>
                <p className="text-black/50 tracking-widest leading-5 text-sm">{product.description}</p>

                <div className="mt-2 text-2xl font-bold text-red-600 group-hover:scale-110   duration-300 translate">
                  {product.oldPrice && (
                    <span className="text-black/20 line-through mr-2 ">
                      {product.oldPrice}
                    </span>
                  )}
                  {product.price}
                </div>

                <PrimaryButton className="text-white border hover:bg-transparent hover:bg-primary:" >Add to Cart</PrimaryButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Delights;
