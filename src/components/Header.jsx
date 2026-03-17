
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header=()=>{
const navigate=useNavigate()
return(
<header className="container mx-auto px-6 py-6 flex justify-between items-center">
<div className="flex items-center space-x-3">
<ChevronLeft className="w-6 h-6 text-blue-900 hidden sm:block"/>
<span className="font-bold text-lg text-blue-50">
LLM Ontology Explorer
</span>
</div>
<button
onClick={()=>navigate("/chat")}
className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
>
Start Chat
</button>
</header>
)
}
export default Header
