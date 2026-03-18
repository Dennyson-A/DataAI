import { X } from "lucide-react";

const FeatureModal = ({ feature, onClose }) => {

if (!feature) return null;

return (

<div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">

<div className="bg-white rounded-xl p-6 max-w-lg w-full shadow-xl relative">

<button
onClick={onClose}
className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
>
<X />
</button>

<h2 className="text-lg font-semibold mb-3">
{feature.title}
</h2>

<p className="text-gray-600 text-sm mb-4">
{feature.fullDescription}
</p>

<ul className="text-sm text-gray-700 space-y-2 mb-4">
{feature.points?.map((point, index) => (
<li key={index}>• {point}</li>
))}
</ul>

<div className="flex flex-wrap gap-2">
{feature.tags?.map((tag, index) => (
<span
key={index}
className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-md"
>
{tag}
</span>
))}
</div>

</div>

</div>

);

};

export default FeatureModal;