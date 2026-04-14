const domains = [
    {
      title: "Food",
      desc: "Household food consumption patterns.",
      link: "/data/food.csv"
    },
    {
      title: "Education",
      desc: "Spending on education.",
      link: "/data/education.csv"
    },
    {
      title: "Welfare",
      desc: "Government welfare benefits.",
      link: "/data/welfare.csv"
    },
    {
      title: "Digital Access",
      desc: "Internet and digital usage.",
      link: "/data/digital.csv"
    },
    {
      title: "Assets",
      desc: "Household asset ownership.",
      link: "/data/assets.csv"
    }
  ];
  
  const DomainSection = () => {
    return (
      <div className="mt-6">
  
        <h2 className="text-white font-semibold mb-4">
          Dataset Domains
        </h2>
  
        <div className="grid sm:grid-cols-2 gap-4">
  
          {domains.map((d, i) => (
            <div
              key={i}
              className="bg-white/10 p-4 rounded-xl border border-white/20 hover:border-blue-400 transition"
            >
              <h3 className="text-white font-medium mb-1">
                {d.title}
              </h3>
  
              <p className="text-blue-200 text-xs mb-2">
                {d.desc}
              </p>
  
              <a
                href={d.link}
                download
                className="text-blue-400 text-xs hover:underline"
              >
                Download →
              </a>
            </div>
          ))}
  
        </div>
  
      </div>
    );
  };
  
  export default DomainSection;