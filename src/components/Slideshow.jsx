import { useState, useEffect, useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

import food from "../assets/images/food.png";
import fuel from "../assets/images/energy.png";
import education from "../assets/images/durables.png";
import digital from "../assets/images/service.png";
import asset from "../assets/images/assets.png";

const Slideshow = () => {
  const slides = [
    { image: food, title: "Food Expenditure by Region" },
    { image: fuel, title: "Fuel Expenditure Distribution" },
    { image: education, title: "Educational Spending" },
    { image: digital, title: "Digital Access Expenditure" },
    { image: asset, title: "Asset Spending" }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  // 🔁 Start / Reset Timer
  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalRef.current);
  }, []);

  // 👉 Controls (RESET TIMER on click)
  const goToSlide = (index) => {
    setCurrentSlide(index);
    startTimer();
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    startTimer();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
    startTimer();
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-[500px]">

      {/* HEADER */}
      <div className="bg-blue-50 p-4 border-b">
        <h3 className="font-bold text-lg">
          Expense Distribution in India
        </h3>
        <p className="text-sm text-gray-600">
          {slides[currentSlide].title}
        </p>
      </div>

      {/* IMAGE */}
      <div className="p-5 flex justify-center relative">

        {/* ⬅️ Previous Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-gray-100"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="rounded-lg w-full h-[450px] object-cover transition-all duration-500"
        />

        {/* ➡️ Next Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-gray-100"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

      </div>

      {/* CONTROLS */}
      <div className="px-5 py-4 grid grid-cols-3 items-center border-t">

        {/* LEFT - Previous */}
        <div className="flex justify-start">
        
          <button
            onClick={prevSlide}
            className="text-blue-600 text-sm flex items-center space-x-1"
          >
             <ChevronLeft className="w-4 h-4" />
            <span>
            Previous
            </span>
          </button>
        </div>

        {/* CENTER - Dots */}
        <div className="flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all rounded-full ${
                currentSlide === index
                  ? "bg-blue-600 w-3 h-3"
                  : "bg-gray-300 w-2 h-2 hover:bg-gray-400"
              }`}
            ></button>
          ))}
        </div>

        {/* RIGHT - Next */}
        <div className="flex justify-end">
          <button
            onClick={nextSlide}
            className="text-blue-600 text-sm flex items-center space-x-1"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};

export default Slideshow;