
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Proejct from "./Compoenents/Project/Project";
import Home from "./Compoenents/Home/Home";
import Experience from "./Compoenents/Experience/Experience";
import Sidebar from "./Compoenents/Sidebar/Sidebar";
import About from "./Compoenents/About/About";
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Home />} />
        <Route path="project" element={<Proejct />} />
        <Route path="Experience" element={<Experience />} />
        <Route path="sidebar" element={<Sidebar />} />
        <Route path="about" element={<About/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
