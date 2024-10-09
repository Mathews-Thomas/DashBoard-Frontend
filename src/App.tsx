import {  Route, Routes } from "react-router-dom";
import Template from "./Components/Template/Template";
import Master from "./Pages/Master/Master";
import Frontdesk from "./Components/Frontdesk/Frontdesk";
import Frontdeskcash from "./Components/Frontdeskcash/Frontdeskcash";
import Utilities from "./Components/Utilities/Utilities";
import Setup from "./Components/Setup/Setup";

interface WrapperProps {
  value: string; 
}

function App() {
  return (
    <Routes>
       <Route path="/" element={<Template/>} >
       <Route index element={<Wrapper value={"Dashboard"} />} />
       <Route path="/master" element={<Master/>} />
       <Route path="/reservation" element={<Wrapper value={"reservation"} />} />
       <Route path="/front-desk" element={<Frontdesk/>} />
       <Route path="/cashiering" element={<Frontdeskcash />} />
       <Route path="/report-analysis" element={<Wrapper value={"report-analysis"} />} />
       <Route path="/quick-utilities" element={<Utilities />} />
       <Route path="/setup" element={<Setup/>} />
       </Route>
    </Routes>
  );
}

export default App;

const Wrapper: React.FC<WrapperProps> = ({ value }) => {
  return (
    <div className="text-2xl uppercase text-center p-10 font-Poppins font-bold">
      {value} page
    </div>
  );
};
