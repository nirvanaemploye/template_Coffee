import React from 'react';

const TestimonialSection = () => {
  const testimonials = [
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
      name: "NEIL WILFORD",
      image: "/path-to-profile-image.jpg",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
      name: "NEIL WILFORD",
      image: "/path-to-profile-image.jpg",
      social: true,
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
      name: "NEIL WILFORD",
      image: "/path-to-profile-image.jpg",
    },
  ];

  return (
    <div className="bg-[#FDF8F7] py-16">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Testimonial</h2>
          <div className="flex justify-center">
            <img src="/coffee-icon.png" alt="coffee icon" className="w-6 h-6" />
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-lg shadow-sm relative ${
                testimonial.social ? 'bg-[#E5A97F] text-white' : ''
              }`}
            >
              {/* Quote Icon */}
              <div className="absolute top-8 left-8">
                <span className={`text-6xl ${testimonial.social ? 'text-white' : 'text-gray-200'}`}>"</span>
              </div>

              {/* Testimonial Text */}
              <p className="text-sm leading-relaxed mt-8 mb-8 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Profile Section */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-sm">{testimonial.name}</h3>
                
                {/* Social Icons */}
                {testimonial.social && (
                  <div className="flex gap-4 mt-4">
                    <a href="#" className="text-white hover:opacity-75">
                      <i className="fab fa-google"></i>
                    </a>
                    <a href="#" className="text-white hover:opacity-75">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="text-white hover:opacity-75">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection; 