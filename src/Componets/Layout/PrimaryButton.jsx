const PrimaryButton = ({
  children,
  className = "",
  onClick,
  type = "button",
}) => {
  return (
    <button
    // data-aos="zoom-out"  
      type={type}
      onClick={onClick}
      className={`font-semibold font-openSans xl:px-7 px-4 py-1.5 text-sm lg:text-lg xl:py-3 bg-primary transition hover:bg-white hover:text-black hover:border-primary group-hover:bg-white group-hover:text-black duration-300 translate ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
