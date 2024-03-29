import "./App.css";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { WhyDevsUnite, Home, Roadmaps, Contact } from "./components/pages";
import { RoadmapTest } from "./components/pages/RoadmapTest";
import PageNotFound from "./components/pages/PageNotFound";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whydevsunite" element={<WhyDevsUnite />} />
        <Route path="/roadmaps/:roadmapId" element={<RoadmapTest />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/roadmaps" element={<Roadmaps />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
