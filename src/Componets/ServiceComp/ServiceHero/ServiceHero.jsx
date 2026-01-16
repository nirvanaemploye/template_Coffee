import BaseLine from "../../Layout/BaseLine"
import PrimaryButton from "../../Layout/PrimaryButton"
import Herobg from "../../../assets/ServiceCompImg/ServiceHeroBg.png"
import Navbar from "../../../Componets/Layout/Navbar/Navbar"


const HeroBg = {
  backgroundImage: `url(${Herobg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center top",
  backgroundSize: "cover",
};
const ServiceHero = () => {
  return (
    <section style={HeroBg} className="">
      <Navbar/>
      <div data-aos="fade-up" className="container py-16 md:py-24">
        <div className="flex flex-col items-center space-y-5 md:space-y-8 text-center">
          <h1 className="font-bold text-4xl sm:text-6xl md:text-8xl uppercase lg:pb-6 text-white">our services</h1>
          <BaseLine/>
          <PrimaryButton className="text-white">Read More</PrimaryButton>
        </div>
      </div>
    </section>
  )
}

export default ServiceHero