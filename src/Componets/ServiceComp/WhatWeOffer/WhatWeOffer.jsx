import { GrFormSubtract, GrSubtract } from "react-icons/gr";
import Fram from "../../../assets/ServiceCompImg/OfferFram.png";
import PrimaryButton from "../../Layout/PrimaryButton";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from 'react';

const WhatWeOffer = () => {
  const [activeSection, setActiveSection] = useState('dining');

  const sections = {
    dining: {
      title: "Private Dining Room",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet leo sit amet ante luctac ."
    },
    wedding: {
      title: "Organize A Wedding",
      content: "Our wedding venue offers elegant spaces and professional planning services to make your special day perfect."
    },
    birthday: {
      title: "Birthday Party",
      content: "Create unforgettable birthday celebrations with our customized party packages and dedicated event staff."
    }
  };

  const toggleSection = (sectionId) => {
    if (activeSection === sectionId) {
      setActiveSection(null);
    } else {
      setActiveSection(sectionId);
    }
  };

  return (
    <section className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-14">
          <div className="flex flex-col justify-between p-3 2xl:px-14 2xl:p-10 order-2 xl:order-1">
            <div className="space-y-5 sm:tracking-widest sm:leading-9">
              <p data-aos="fade-down" className="text-xl sm:text-3xl text-primary font-bold tracking-wider">What We Offer?</p>
              <p data-aos="fade-down" className="font-bold text-3xl sm:text-5xl leading-tight">
                Host private events in an intimate setting
              </p>
              <p data-aos="fade-down" className="text-black/40">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet leo sit amet ante luctus feugiat. Nulla non bibendum augue,
                sed tempor dui. Nam dui risus, varius sed luctus vitae,
                accumsan.
              </p>
            </div>
            <div data-aos="fade-down" className="smleading-9 tracking-widest sm:text-lg">
              <div className="py-5">
                <h1 
                  onClick={() => toggleSection('dining')}
                  className="font-bold text-xl sm:text-2xl flex items-center gap-2 cursor-pointer"
                >
                  <span>
                    {activeSection === 'dining' ? 
                      <FaMinus className="text-primary text-xl" /> : 
                      <FaPlus className="text-primary text-xl" />
                    }
                  </span>
                  {sections.dining.title}
                </h1>
                {activeSection === 'dining' && (
                  <p className="text-black/40 mt-2 transition-all duration-300">
                    {sections.dining.content}
                  </p>
                )}
              </div>
              <hr className="border-e border-black/25"/>
              <div className="py-5">
                <h1 
                  onClick={() => toggleSection('wedding')}
                  className="font-bold text-xl flex items-center gap-2 cursor-pointer"
                >
                  <span>
                    {activeSection === 'wedding' ? 
                      <FaMinus className="text-primary text-xl" /> : 
                      <FaPlus className="text-primary text-xl" />
                    }
                  </span>
                  {sections.wedding.title}
                </h1>
                {activeSection === 'wedding' && (
                  <p className="text-black/40 mt-2 transition-all duration-300">
                    {sections.wedding.content}
                  </p>
                )}
              </div>
              <hr className="border-e border-black/25" />
              <div className="py-5">
                <h1 
                  onClick={() => toggleSection('birthday')}
                  className="font-bold text-xl flex items-center gap-2 cursor-pointer"
                >
                  <span>
                    {activeSection === 'birthday' ? 
                      <FaMinus className="text-primary text-xl" /> : 
                      <FaPlus className="text-primary text-xl" />
                    }
                  </span>
                  {sections.birthday.title}
                </h1>
                {activeSection === 'birthday' && (
                  <p className="text-black/40 mt-2 transition-all duration-300">
                    {sections.birthday.content}
                  </p>
                )}
              </div>
             
              <PrimaryButton className="border text-white">Schedule Your Events</PrimaryButton>
            </div>
          </div>
          <div className="order-1 xl:order-2 flex justify-center items-center">
            <img data-aos="zoom-in" src={Fram} alt="" className="sm:p-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
