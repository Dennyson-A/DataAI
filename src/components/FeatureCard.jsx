const FeatureCard = ({ feature, onLearnMore }) => {

    return (
    
    <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30 hover:bg-white/30 transition shadow-lg">
    
    <h3 className="font-semibold text-white text-sm mb-1">
    {feature.title}
    </h3>
    
    <p className="text-blue-100 text-xs mb-3">
    {feature.shortDescription}
    </p>
    
    <button
    onClick={() => onLearnMore(feature)}
    className="text-xs text-blue-300 hover:text-white underline"
    >
    Learn More →
    </button>
    
    </div>
    
    );
    
    };
    
    export default FeatureCard;