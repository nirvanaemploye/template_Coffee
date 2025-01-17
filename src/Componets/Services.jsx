import cardimg from "../assets/coffee2.png"
const Services = () => {
    const ServicesData = [
        {
            id:1,
            img:cardimg,
            name: "Espresso",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, laborum",
            aosDelay:"100"
        },
        {
            id:2,
            img:cardimg,
            name: "Americano",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, laborum",
            aosDelay:"300"
        },
        {
            id:3,
            img:cardimg,
            name: "cappuccino",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, laborum",
            aosDelay:"500"
        },

    ]
  return (
    <section>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* Header Title */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">
              Best Coffee For You
            </h1>
          </div>
          {/* Services card SEction */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((data, index)=>{
                return(
                  
                    <div 
                    data-aos="fade-up"
                    data-aos-delay={data.aosDelay}
                    key={index} 
                    className="rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group relative">
                        {/* Image Section */}
                        <div className="h-[122px]">
                            <img src={data.img} alt="img" className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300"/>
                        </div>
                        {/* text Content  */}
                        <div className="p-4 text-center">
                            <h1 className="text-xl font-bold">
                                {data.name}
                            </h1>
                            <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{data.description}</p>

                        </div>
                    </div>
                )
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
