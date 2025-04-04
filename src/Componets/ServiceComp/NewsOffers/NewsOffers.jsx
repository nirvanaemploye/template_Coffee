import PrimaryButton from "../../Layout/PrimaryButton"

const NewsOffers = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div data-aos="fade-down" className="mx-9 2xl:px-16">
            <h1 className=" text-3xl md:text-5xl font-bold sm:leading-relaxed tracking-wider">
              Stay Upto Date On All News And Offers.
            </h1>
          </div>
          <div data-aos="fade-down" className=" space-y-5 lg:pe-20 px-10">
            <p className="text-lg text-black/40 sm:tracking-widest ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
              amet leo sit amet ante luctac.
            </p>
            <div className="flex flex-row">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full bg-[#f2f2f2] p-3 sm:p-4"
            />
            <PrimaryButton className="sm:px-12 sm:text-xl text-white border">Subscribe</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsOffers;
