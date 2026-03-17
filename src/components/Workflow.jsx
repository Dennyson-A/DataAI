
import { Database,Zap,Target } from "lucide-react";

const Workflow=()=>{
return(
<div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
<h3 className="font-bold mb-4">Here's how it works:</h3>
<div className="grid grid-cols-3 gap-4 text-center">
<div>
<Database className="mx-auto mb-2"/>
<p className="text-xs">Dataset Understanding</p>
</div>
<div>
<Zap className="mx-auto mb-2"/>
<p className="text-xs">LLM Processing</p>
</div>
<div>
<Target className="mx-auto mb-2"/>
<p className="text-xs">Ontology Insights</p>
</div>
</div>
</div>
)
}
export default Workflow
