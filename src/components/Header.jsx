import { ChevronLeft, User, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {

const navigate = useNavigate();

return (

<header className="container mx-auto px-6 py-6 flex justify-between items-center">

{/* LEFT */}
<div className="flex items-center space-x-3">
<ChevronLeft className="w-6 h-6 text-blue-200 hidden sm:block"/>
<span className="font-bold text-lg text-blue-50">
LLM Ontology Explorer
</span>
</div>

{/* RIGHT */}
<div className="flex items-center space-x-4">

{/* DETAILS BUTTON */}
<button
onClick={() => navigate("/details")}
className="flex items-center space-x-2 text-blue-100 hover:text-white transition"
>
<Info className="w-5 h-5"/>
<span className="hidden sm:block text-sm">Details</span>
</button>

{/* LOGIN BUTTON */}
<button
onClick={() => navigate("/login")}
className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition shadow-md"
>
<User className="w-4 h-4"/>
<span className="text-sm">Login</span>
</button>

</div>

</header>

);

};

export default Header;