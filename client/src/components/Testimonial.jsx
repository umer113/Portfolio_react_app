import { useState, useEffect } from "react";

const TestimonialSlide = ({ testimonials, curr, goToSlide }) => (
  <div className="p-4 flex flex-col items-center h-full relative">
    <p className="text-white text-center italic font-playfair">
      <span className="mx-auto">{testimonials[curr].feedback}</span>
    </p>
    <h3 className="text-lg font-opensans text-white mb-2 mt-4">{testimonials[curr].client}</h3>
    <div className="absolute mt-60 sm:mt-40 left-1/2 transform -translate-x-1/2">
      <div className="flex items-center justify-center gap-2">
        {testimonials.map((_, i) => (
          <div
            key={i}
            onClick={() => goToSlide(i)}
            className={`transition-all w-3 h-3 bg-white rounded-full cursor-pointer 
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
          />
        ))}
      </div>
    </div>
  </div>
);

export default function Testimonial({
  testimonials,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const goToSlide = (index) => {
    setCurr(index);
  };

  const next = () =>
    setCurr((curr) => (curr === testimonials.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide || !Array.isArray(testimonials) || testimonials.length === 0) return;

    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, testimonials]);

  if (!Array.isArray(testimonials) || testimonials.length === 0) {
    return null;
  }

  return (
    <div className="overflow-hidden relative bg-deep-blue h-screen w-full">
      <div className="flex items-center justify-center h-full">
        <div className="p-4">
          <h1 className=" text-4xl font-bold text-center mb-10  border-cyan-200 text-blue-600">What other people say</h1>
          <TestimonialSlide testimonials={testimonials} curr={curr} goToSlide={goToSlide} />
        </div>
      </div>
    </div>
  );
}
