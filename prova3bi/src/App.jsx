import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Paginas/Home";
import "./App.css";

import Dipper from "./Paginas/dipper";
import Mabel from "./Paginas/Mabel";
import Stan from "./Paginas/Stan";
import Bill from "./Paginas/Bill";

export default function App()
{
    return (
       <BrowserRouter>
           <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/dipper" element={<Dipper />} />
               <Route path="/mabel" element={<Mabel />} />
               <Route path="/bill" element={<Bill />} />
               <Route path="/stan" element={<Stan />} />
           </Routes>
       </BrowserRouter>
    );
}