import top from "../../../assets/HomeCompImg/DelightsImg/Top.png";
import bottom from "../../../assets/HomeCompImg/DelightsImg/Bottom.png";
import BaseLine from "../../Layout/BaseLine";
import List1 from "../../../assets/HomeCompImg/DelightsImg/list1.png";
import List2 from "../../../assets/HomeCompImg/DelightsImg/List2.png";
import List3 from "../../../assets/HomeCompImg/DelightsImg/List3.png";
import PrimaryButton from "../../Layout/PrimaryButton";
import Slider from "react-slick";

// Product Data (Fixed IDs)
const products = [
  {
    id: 1,
    name: "Coffee Kettle",
    description: "Premium coffee kettle",
    price: "$40",
    image: List3,
    sale: false,
  },
  {
    id: 2,
    name: "Indian Coffee",
    description: "Rich & aromatic",
    oldPrice: "$50",
    price: "$40",
    image: List2,
    sale: true,
  },
  {
    id: 3,
    name: "Coffee Machine",
    description: "Top-quality brewing",
    price: "$40",
    image: List1,
    sale: false,
  },
  {
    id: 4,
    name: "Deluxe Coffee",
    description: "Smooth & flavorful",
    oldPrice: "$50",
    price: "$40",
    image: List2,
    sale: true,
  },
  {
    id: 5,
    name: "Coffee Kettle",
    description: "Premium coffee kettle",
    price: "$40",
    image: List3,
    sale: false,
  },
  {
    id: 6,
    name: "Indian Coffee",
    description: "Rich & aromatic",
    oldPrice: "$50",
    price: "$40",
    image: List2,
    sale: true,
  },
  {
    id: 7,
    name: "Coffee Machine",
    description: "Top-quality brewing",
    price: "$40",
    image: List1,
    sale: false,
  },
  {
    id: 8,
    name: "Deluxe Coffee",
    description: "Smooth & flavorful",
    oldPrice: "$50",
    price: "$40",
    image: List2,
    sale: true,
  },
];

// Slick Slider Settings
const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 4,
  slidesToScroll: 2, // Scrolls 2 slides at a time for better UX
  autoplay: true, // Enables auto-sliding
  autoplaySpeed: 3000, // Slides every 3 seconds
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 2 } },
    { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};


const Delights = () => {
  return (
    <section className="py-32 relative">
      {/* Background Decorations */}
      <img src={top} alt="Top decoration" className="absolute top-0 right-0" />
      <img src={bottom} alt="Bottom decoration" className="absolute bottom-0" />

      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="flex flex-col items-center space-y-6 text-center">
          <h1
            data-aos="fade-up"
            className="font-bold sm:text-5xl text-3xl tracking-wider"
          >
            Freshly Brewed Delights
          </h1>
          <BaseLine />
          <p
            data-aos="fade-up"
            className="w-10/12 md:w-9/12 text-lg text-black/60 tracking-wider"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard since the
            1500s.
          </p>
        </div>
        {/* Product Slider */}
        <div className="pt-20">
          <Slider {...settings} className="pb-4">
            {products.map((product) => (
              <div key={product.id} className="px-4">
                <div
                  className="bg-white group shadow-lg rounded-lg overflow-hidden relative"
                  data-aos="zoom-in"
                >
                  {/* Sale Tag */}
                  {product.sale && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-3 py-2 rounded">
                      20% off
                    </span>
                  )}

                  {/* Product Image */}
                  <div className="bg-neutral-100 flex items-center justify-center h-80 w-full p-14">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="p-4 text-center space-y-4">
                    <h3 className="text-xl font-semibold transition-transform duration-300 ">
                      {product.name}
                    </h3>
                    <p className="text-black/50 tracking-widest leading-5 text-sm">
                      {product.description}
                    </p>

                    {/* Pricing */}
                    <div className="mt-2 text-2xl font-bold text-red-600 transition-transform duration-300">
                      {product.oldPrice && (
                        <span className="text-black/20 line-through mr-2">
                          {product.oldPrice}
                        </span>
                      )}
                      {product.price}
                    </div>

                    {/* Add to Cart Button */}
                    <PrimaryButton className="text-white border hover:bg-transparent">
                      Add to Cart
                    </PrimaryButton>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Delights;
