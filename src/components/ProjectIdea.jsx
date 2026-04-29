const ProjectIdeas = () => {
    const projects = [
      {
        title: "AI-Based Poverty Prediction System",
        goal: "Predict whether a household is poor or vulnerable",
      },
      {
        title: "State-wise Inequality Dashboard",
        goal: "Visualize inequality across states",
      },
      {
        title: "Natural Language Query System",
        goal: "Query dataset using plain English",
      },
      {
        title: "Welfare Scheme Recommendation System",
        goal: "Suggest schemes to households",
      },
      {
        title: "Consumption Pattern Analyzer",
        goal: "Analyze spending behavior",
      },
      {
        title: "Digital Divide Analysis System",
        goal: "Study digital inequality",
      },
      {
        title: "Household Lifestyle Segmentation",
        goal: "Group households into categories",
      },
      {
        title: "Time-Based Trend Analysis",
        goal: "Analyze changes over time",
      },
      {
        title: "Energy Transition Study",
        goal: "Study shift to modern energy",
      },
      {
        title: "Wealth Inequality Analyzer",
        goal: "Compare asset ownership",
      },
      {
        title: "Education vs Income Study",
        goal: "Analyze relation between education and income",
      },
      {
        title: "Policy Impact Simulator",
        goal: "Simulate government policy effects",
      },
      {
        title: "AI Chatbot for Policy Makers",
        goal: "Provide interactive policy insights",
      },
      {
        title: "Fraud Detection in Welfare Distribution",
        goal: "Detect abnormal benefit patterns",
      },
      {
        title: "Multi-Domain Index Builder",
        goal: "Create a composite development index",
      },
    ];
  
    return (
        <div className="mt-10 bg-white/10 p-6 rounded-xl border border-white/20 w-full px-4">
        <h2 className="text-white font-semibold mb-4">
          Suggested Project Ideas
        </h2>
  
        <div className="grid md:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 p-4 rounded-lg border border-white/10"
            >
              <h3 className="text-blue-200 font-medium text-sm mb-1">
                {project.title}
              </h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                {project.goal}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProjectIdeas;