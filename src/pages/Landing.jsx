import Header from "../components/Header";
import FeatureCard from "../components/FeatureCard";
import FeatureModal from "../components/FeatureModal"; 
import Slideshow from "../components/Slideshow";
import Workflow from "../components/Workflow";
import AboutProject from "../components/AboutProject";
import DomainSection from "../components/DomainSection";
import TeamSection from "../components/TeamSection";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react"; 

import bg from "../assets/images/ai-network-bg.png";

const Landing = () => {

const navigate = useNavigate();
const [selectedFeature, setSelectedFeature] = useState(null); 

const features = [

{
title: "What is the Dataset?",
shortDescription: "Household expenditure dataset from NSS survey.",
fullDescription:
"This dataset represents detailed household consumption patterns across India, capturing how families allocate their spending across essential and non-essential categories such as food, fuel, services, and assets.",

points: [
"Based on National Sample Survey (NSS)",
"Captures real household consumption behavior",
"Covers diverse income groups and regions",
"Represents both rural and urban populations"
],

extra: [
"Helps understand economic lifestyle differences",
"Useful for identifying spending priorities across households"
],

tags: ["Consumption", "Households", "India"]
},

{
title: "Dataset Origin",
shortDescription: "National Data Archive – Government of India.",
fullDescription:
"The dataset is sourced from the National Data Archive (NADA), maintained by the Government of India. It is derived from official NSS surveys conducted across the country.",

points: [
"Official Government of India dataset",
"Sourced from microdata.gov.in",
"Collected through nationwide surveys",
"Highly reliable and standardized data"
],

extra: [
"Used by researchers, economists, and policymakers",
"Recognized for academic and policy-level analysis"
],

tags: ["NADA", "Government", "Official"]
},

{
title: "What is in the Dataset?",
shortDescription: "Socio-economic indicators and expenditure categories.",
fullDescription:
"The dataset contains detailed socio-economic and expenditure-related attributes that allow deep analysis of household behavior across different regions of India.",

points: [
"State, district, and regional data",
"Household size and demographic details",
"Income and expenditure values",
"Multiple expense categories (food, fuel, services, assets)"
],

extra: [
"Derived indicators like MPCE (Monthly Per Capita Expenditure)",
"Includes indices like economic vulnerability and food security"
],

tags: ["Attributes", "Indicators", "Data"]
},

{
    title: "Expenditure Categories Covered",
    shortDescription: "6 major household expenditure categories analyzed.",
    fullDescription:
    "The dataset analyzes household spending across six major expenditure categories, visualized through regional distribution maps to understand economic patterns across India.",
    
    points: [
    "Food Expenditure",
    "Fuel & Energy Expenditure",
    "Assets Expenditure",
    "Durables Expenditure",
    "Service & Out-of-Home Expenditure",
    "Other Consumption Expenditure"
    ],
    
    extra: [
    "Each category is mapped across Indian states",
    "Helps identify regional spending variations",
    "Supports comparative economic analysis",
    "Used for visual data interpretation through maps"
    ],
    
    tags: ["Expenditure", "Categories", "Visualization"]
    },

{
title: "How Can It Be Used?",
shortDescription: "Economic analysis and policy insights.",
fullDescription:
"This dataset can be used for various analytical and research purposes, helping stakeholders understand consumption trends and economic conditions.",

points: [
"Economic and financial analysis",
"Policy making and welfare planning",
"Regional comparison studies",
"Trend analysis over time"
],

extra: [
"Useful for academic research and case studies",
"Helps identify inequality and development gaps"
],

tags: ["Analysis", "Policy", "Insights"]
},

{
title: "How Our Model Uses It",
shortDescription: "LLM-based ontology and query system.",
fullDescription:
"Our system uses Large Language Models (LLMs) to convert the dataset into a structured ontology, enabling intelligent querying using natural language.",

points: [
"Extracts entities and relationships",
"Builds ontology from raw data",
"Supports natural language queries",
"Provides context-aware responses"
],

extra: [
"Removes need for SQL or technical queries",
"Makes dataset accessible to non-technical users"
],

tags: ["LLM", "Ontology", "AI"]
}

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

<AboutProject />

{/* FEATURE CARDS */}
<div className="grid sm:grid-cols-2 gap-4">

{features.map((feature, index) => (
<FeatureCard
key={index}
feature={feature}
onLearnMore={setSelectedFeature} 
/>
))}

</div>

{/* CTA */}
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
<Slideshow />

{/* NEW DOMAIN SECTION */}
<DomainSection />

<Workflow />
</div>

</div>

</div>


<TeamSection />
</div>

{/* MODAL (Popup) */}
<FeatureModal
feature={selectedFeature}
onClose={() => setSelectedFeature(null)}
/>



</div>

);

};

export default Landing;