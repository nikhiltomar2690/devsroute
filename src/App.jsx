import "./App.css";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { WhyDevsUnite, Home, Roadmaps, Contact } from "./components/pages";
import { TermsandConditions } from "./components/pages/TermsandConditions";
import { RoadmapTest } from "./components/pages/RoadmapTest";
import PageNotFound from "./components/pages/PageNotFound";
import { PrivacyPolicy } from "./components/pages/PrivacyPolicy";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whydevsunite" element={<WhyDevsUnite />} />
        <Route path="/roadmaps/:roadmapId" element={<RoadmapTest />} />
        <Route path="/terms" element={<TermsandConditions />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/roadmaps" element={<Roadmaps />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
