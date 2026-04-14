const AboutProject = () => {
    return (
      <div className="mt-10 bg-white/10 p-5 rounded-xl border border-white/20">
  
        <h2 className="text-white font-semibold mb-2">
          About the Project
        </h2>
  
        <p className="text-blue-200 text-sm leading-relaxed">
        This project presents an intelligent system for analyzing Indian household expenditure data using a Large Language Model (LLM)-based ontology framework. The primary objective is to bridge the gap between complex structured datasets and user-friendly data access by enabling natural language querying.

The dataset, derived from National Sample Survey (NSS) sources, contains detailed information on household consumption patterns across multiple domains such as food, education, welfare, digital access, and assets. These domains are critical for understanding socio-economic conditions and regional disparities in India.

Our system transforms this raw data into a structured ontology by identifying key entities, relationships, and attributes. This allows users to interact with the dataset using simple natural language queries instead of traditional SQL or analytical tools.

Through this approach, users can easily explore insights such as regional expenditure variations, consumption trends, and economic indicators. The platform supports data-driven decision-making and can be extended for policy analysis, research applications, and socio-economic studies.

Overall, this project demonstrates how LLMs can enhance data accessibility, improve interpretability, and provide meaningful insights from large-scale real-world datasets.
        </p>
  
      </div>
    );
  };
  
  export default AboutProject;