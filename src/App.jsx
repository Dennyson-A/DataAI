
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Chat from "./pages/Chat";
import Auth from "./pages/Auth";

function App(){
return(
<BrowserRouter>
<Routes>
<Route path="/" element={<Landing/>}/>
<Route path="/chat" element={<Chat/>}/>
<Route path="/login" element={<Auth />} />
</Routes>
</BrowserRouter>
)
}
export default App
