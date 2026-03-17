import Header from "../components/Header";
import FeatureCard from "../components/FeatureCard";
import Slideshow from "../components/Slideshow";
import Workflow from "../components/Workflow";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import bg from "../assets/images/ai-network-bg.png";

const Landing = () => {

const navigate = useNavigate();

const features = [
{
title: "What is the Dataset?",
description: "Detailed household expenditure dataset from NSS survey",
},
{
title: "Dataset Origin",
description: "National Data Archive – Government of India",
},
{
title: "What is in the Dataset?",
description: "States, divisions, socioeconomic indicators",
},
{
title: "How Can It Be Used?",
description: "Economic analysis, policy comparisons",
},
];

return (

<div
className="min-h-screen bg-cover bg-center relative"
style={{ backgroundImage: `url(${bg})` }}
>

{/* DARK OVERLAY */}

<div className="absolute inset-0 bg-blue-950/80"></div>

<div className="relative z-10">

<Header />

<div className="container mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">

{/* LEFT SIDE */}

<div className="space-y-8">

<h1 className="text-5xl font-bold text-white leading-tight">
Explore Indian Household Expenditure Data
<br />
<span className="text-blue-200 font-normal">
Using Natural Language Queries
</span>
</h1>

<button
onClick={() => navigate("/chat")}
className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transition-all"
>
Start Exploring Dataset
</button>

<div className="grid sm:grid-cols-2 gap-4">

{features.map((feature, index) => (
<FeatureCard key={index} {...feature} />
))}

</div>

<div className="bg-white/20 backdrop-blur-md rounded-xl p-5 border border-white/30 space-y-4">

<h3 className="font-semibold text-white">
Ready to explore your dataset?
</h3>

<button
onClick={() => navigate("/chat")}
className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2"
>

<span>Start Chat</span>

<ArrowRight />

</button>

</div>

</div>

{/* RIGHT SIDE */}

<div className="flex justify-center">

<div className="space-y-6">
<Slideshow/>
<Workflow/>
</div>

</div>

</div>

</div>

</div>

);

};

export default Landing;