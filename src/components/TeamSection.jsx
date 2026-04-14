import licet from "../assets/images/licet.png";

const TeamSection = () => {
  return (
    <div className="mt-16 bg-blue-950/80 border-t border-white/10 py-10 px-6">

      <div className="container mx-auto grid md:grid-cols-3 gap-8">

        {/* COLLEGE */}
        <div className="text-center md:text-left">
          <img
            src={licet}
            alt="College Logo"
            className="w-16 mb-3 mx-auto md:mx-0"
          />

          <h3 className="text-white font-semibold text-sm mb-1">
            Loyola ICAM College of Engineering and Technology
          </h3>

          <p className="text-blue-300 text-xs">
            Department of Computer Science & Engineering
          </p>
        </div>

        {/* TEAM MEMBERS */}
        <div>
          <h3 className="text-white font-semibold text-sm mb-3">
            Team Members
          </h3>

          <div className="grid grid-cols-2 gap-2">

            {[
              "Anjanathri",
              "Dennyson",
              "Dinesh Kumar",
              "Fatima Narsel Mary"
            ].map((name, i) => (
              <div
                key={i}
                className="bg-white/10 px-3 py-2 rounded-md text-blue-200 text-xs text-center"
              >
                {name}
              </div>
            ))}

          </div>
        </div>

        {/* GUIDE */}
        <div>
          <h3 className="text-white font-semibold text-sm mb-3">
            Project Guide
          </h3>

          <div className="text-blue-200 text-xs leading-relaxed">
            <p className="text-white font-medium">
              Dr. Nirmala S
            </p>

            <p>Associate Professor</p>
            <p>Department of Computer Science</p>
          </div>
        </div>

      </div>

      {/* FOOTER LINE */}
      <div className="text-center mt-8 text-blue-400 text-xs">
        © 2026 LLM Ontology Explorer | Final Year Project
      </div>

    </div>
  );
};

export default TeamSection;