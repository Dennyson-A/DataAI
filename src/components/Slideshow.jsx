import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

import food from "../assets/images/food.png";
import fuel from "../assets/images/fuel.png";
import education from "../assets/images/durables.png";
import housing from "../assets/images/service.png";
import transport from "../assets/images/asset.png";

const Slideshow = () => {

const slides = [
{ image: food, title: "Food Expenditure by Region" },
{ image: fuel, title: "Fuel Expenditure Distribution" },
{ image: education, title: "Durables Spending" },
{ image: housing, title: "Service Expenditure" },
{ image: transport, title: "Asset Spending" }
];

const [currentSlide, setCurrentSlide] = useState(0);

useEffect(() => {

const interval = setInterval(() => {
setCurrentSlide((prev) => (prev + 1) % slides.length);
}, 5000);

return () => clearInterval(interval);

}, []);

return (

<div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-[500px]">

<div className="bg-blue-50 p-4 border-b">
<h3 className="font-bold text-lg">
Expense Distribution in India
</h3>
<p className="text-sm text-gray-600">
{slides[currentSlide].title}
</p>
</div>

<div className="p-5 flex justify-center">

<img
src={slides[currentSlide].image}
alt={slides[currentSlide].title}
className="rounded-lg w-full h-[450px] object-cover transition-all duration-500"
/>

</div>

<div className="px-5 py-4 flex justify-between items-center border-t">

<div className="flex space-x-2">

{slides.map((_, index) => (
<button
key={index}
onClick={() => setCurrentSlide(index)}
className={`transition-all rounded-full ${
currentSlide === index
? "bg-blue-600 w-3 h-3"
: "bg-gray-300 w-2 h-2 hover:bg-gray-400"
}`}
></button>
))}

</div>

<button
onClick={() =>
setCurrentSlide((currentSlide + 1) % slides.length)
}
className="text-blue-600 flex items-center space-x-1 text-sm"
>
<span>Next</span>
<ChevronRight className="w-4 h-4" />
</button>

</div>

</div>

);

};

export default Slideshow;