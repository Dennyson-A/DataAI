
const FeatureCard=({title,description})=>{
return(
<div className="bg-white rounded-xl p-4 border hover:border-blue-300 transition shadow-sm">
<h3 className="font-semibold text-sm mb-2">{title}</h3>
<p className="text-gray-600 text-xs">{description}</p>
</div>
)
}
export default FeatureCard
