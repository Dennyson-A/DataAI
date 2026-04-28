import licet from "../assets/images/licet.png";
import { Globe, Linkedin, Instagram, Youtube } from "lucide-react";

const TeamSection = () => {
  return (
    <div className="mt-20 bg-blue-950/90 border-t border-white/10 py-14 px-6">

      <div className="container mx-auto grid md:grid-cols-3 gap-10">

        {/* COLLEGE */}
        <div className="text-center md:text-left space-y-3">

          <img
            src={licet}
            alt="College Logo"
            className="w-20 mb-3 mx-auto md:mx-0"
          />

          <h3 className="text-white font-semibold text-base">
            Loyola ICAM College of Engineering and Technology
          </h3>

          <p className="text-blue-300 text-sm">
            Department of Computer Science & Engineering
          </p>

          {/* WEBSITE */}
          <a
            href="https://licet.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start gap-2 text-blue-400 text-sm hover:text-white transition"
          >
            <Globe size={16} />
            Visit Website
          </a>

          {/* SOCIAL */}
          <div className="flex justify-center md:justify-start gap-5 mt-3 text-blue-400">

            <a
              href="https://www.linkedin.com/school/loyola-icam-college-of-engineering-and-technology/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="https://www.instagram.com/loyolaicam_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Instagram size={20} />
            </a>

            <a
              href="https://www.youtube.com/channel/UCR13QxRq4JDFMsy4c-bKuww"
              target="_blank"
              rel="noLICETOfficialopener noreferrer"
              className="hover:text-white transition"
            >
              <Youtube size={20} />
            </a>

          </div>

        </div>

        {/* DEVELOPED BY */}
        <div>
          <h3 className="text-white font-semibold text-base mb-4">
            Developed By
          </h3>

          <div className="grid grid-cols-2 gap-3">

            {[
              "Anjanathri",
              "Dennyson",
              "Dinesh Kumar",
              "Fatima Narsel Mary"
            ].map((name, i) => (
              <div
                key={i}
                className="bg-white/10 px-4 py-2 rounded-lg text-blue-200 text-sm text-center hover:bg-white/20 transition"
              >
                {name}
              </div>
            ))}

          </div>
        </div>

        {/* GUIDED BY */}
        <div>
          <h3 className="text-white font-semibold text-base mb-4">
            Guided By
          </h3>

          <div className="text-blue-200 text-sm leading-relaxed space-y-1">
            <p className="text-white font-medium text-base">
              Ms. Nirmala S
            </p>

            <p>Associate Professor</p>
            <p>Department of Computer Science and Engineering</p>
          </div>
        </div>

      </div>

      {/* FOOTER */}
      <div className="text-center mt-10 text-blue-400 text-sm">
        2026 LLM Ontology Explorer | Final Year Project
      </div>

    </div>
  );
};

export default TeamSection;