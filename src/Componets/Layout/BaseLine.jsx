import logo from "../../assets/Logo.svg";

const BaseLine = () => {
  return (
    <div data-aos="fade-up" data-aos-delay="200" className="flex flex-row items-center w-44">
      <p className="border border-primary border-dashed w-16"></p>
      <img src={logo} alt="" className="mx-auto w-5 md:w-6 " />
      <p className="border border-primary border-dashed w-16"></p>
    </div>
  );
};

export default BaseLine;
