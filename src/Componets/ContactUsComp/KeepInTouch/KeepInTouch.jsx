// import { object, p } from "motion/react-client";
import FramImg from "../../../assets/ContactUsCompImg/Fram.png";
import PrimaryButton from "../../Layout/PrimaryButton";
import { useState } from "react";
const KeepInTouch = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setError] = useState({});
  const [Submitted, setSubmitted] = useState(false);

  const vlaidate = () => {
    const newerrors = {};
    if (!form.name.trim()) {
      newerrors.name = "Name is required";
    }
    if (!form.phone.trim()) {
      newerrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newerrors.phone = "Enter a valid 10-digit Indian phone number";
    }

    if (!form.email.trim()) newerrors.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email))
      newerrors.email = "Invalid email address";
    if (!form.message.trim()) {
      newerrors.message = "Message is required";
    }
    setError(newerrors);
    return Object.keys(newerrors).length === 0;
  };

  const handleChange = (e) => {
    setForm((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    setError((pre) => ({ ...pre, [e.target.name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!vlaidate()) return;

    console.log(form);
    setSubmitted(true);
    setForm({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
    setError({});
  };

  return (
    <section className="sm:py-36 py-10 ">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-10">
          <div className="2xl:space-y-7 space-y-5 xl:order-1 order-2 px-4 sm:px-10 lg:px-20 xl:px-8 ">
            <h1
              data-aos="fade-right"
              className="text-3xl font-bold text-primary"
            >
              KEEP IN TOUCH
            </h1>
            <p
              data-aos="fade-right"
              className="2xl:text-xl tracking-widest text-black/40"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
              amet leo sit amet ante luctus feugiat. Null a non bibendum augue,
              sed tempor dui. Nam dui risus, varius sed luctus vitae, accumsan.{" "}
            </p>
            <>
              {!Submitted ? (
                <form
                data-aos="fade-right"
                  onSubmit={handleSubmit}
                  className="2xl:space-y-6 space-y-4 flex flex-col sm:pe-5 items-end w-full"
                  noValidate
                >
                  {/* Name */}
                  <div className="w-full">
                    <input
                    
                      name="name"
                      type="text"
                      placeholder="Enter Your Name"
                      value={form.name}
                      onChange={handleChange}
                      className={`bg-[#f2f2f2] w-full p-4 rounded-md focus:outline-none focus:ring-2 transition ${
                        errors.name
                          ? "focus:ring-red-500 border border-red-500"
                          : "focus:ring-primary"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-600 mt-1 text-sm">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="w-full">
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Enter Your Phone Number"
                      value={form.phone}
                      onChange={handleChange}
                      className={`bg-[#f2f2f2] w-full p-4 rounded-md focus:outline-none focus:ring-2 transition ${
                        errors.phone
                          ? "focus:ring-red-500 border border-red-500"
                          : "focus:ring-primary"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-600 mt-1 text-sm">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="w-full">
                    <input
                      name="email"
                      type="email"
                      placeholder="Enter Your Email"
                      value={form.email}
                      onChange={handleChange}
                      className={`bg-[#f2f2f2] w-full p-4 rounded-md focus:outline-none focus:ring-2 transition ${
                        errors.email
                          ? "focus:ring-red-500 border border-red-500"
                          : "focus:ring-primary"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-600 mt-1 text-sm">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="w-full">
                    <textarea
                      name="message"
                      rows={6}
                      placeholder="Message"
                      value={form.message}
                      onChange={handleChange}
                      className={`resize-none w-full text-lg bg-[#f2f2f2] p-4 rounded-md focus:outline-none focus:ring-2 transition ${
                        errors.message
                          ? "focus:ring-red-500 border border-red-500"
                          : "focus:ring-primary"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-600 mt-1 text-sm">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <PrimaryButton type="submit" className=" border text-white">
                    Submit
                  </PrimaryButton>
                </form>
              ) : (
                <div className=" mx-auto  py-10 text-center bg-primary/10 text-secondary rounded-md space-y-4">
                  <h2 className="text-2xl font-semibold ">Success!</h2>
                  <p>Your message has been sent successfully.</p>
                  <PrimaryButton
                    onClick={() => setSubmitted(false)}
                    className=" border text-white"
                  >
                    Send Another Message
                  </PrimaryButton>
                </div>
              )}
            </>
          </div>
          <div
            data-aos="zoom-out"
            className="flex justify-center items-center order-1 xl:order-2"
          >
            <img src={FramImg} alt="" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeepInTouch;
