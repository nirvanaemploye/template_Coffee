import BaseLine from "../../Layout/BaseLine"
import PrimaryButton from "../../Layout/PrimaryButton"
import Herobg from "../../../assets/AboutCompImg/AboutHeroBg.png"
import Navbar from "../../../Componets/Layout/Navbar/Navbar"

const HeroBg = {
  backgroundImage: `url(${Herobg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  backgroundSize: "cover",
};

const AboutHero = () => {
  return (
    <section style={HeroBg} className="">
      <Navbar/>
      <div data-aos="fade-up" className="container py-24">
        <div className="flex flex-col items-center space-y-8">
          <h1 className="font-bold text-4xl sm:text-6xl md:text-8xl uppercase lg:pb-3 text-white">About us</h1>
          <BaseLine/>
          <PrimaryButton className="text-white">Read More</PrimaryButton>
        </div>
      </div>
    </section>
  )
}

export default AboutHero