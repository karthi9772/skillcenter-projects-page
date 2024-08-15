import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SkillCentraProjectsPage from "./SkillCentraProjectsPage";
import Basic from "./components/Routes/Basic";
import Footer from "./components/Footer";
import Premium from "./components/Routes/Premium";
import Fullstack from "./components/Routes/Fullstack";
import Advanced from "./components/Routes/Advanced";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="skillcenter/">
            <Route path="projects" element={<SkillCentraProjectsPage />} />
            <Route path="projects/fullstack/" element={<Fullstack />}></Route>
            <Route
              path="projects/fullstack/premium/:id"
              element={<Premium />}
            ></Route>
            <Route path="projects/fullstack/basic/:id" element={<Basic />} />
            <Route path="projects/fullstack/adv/:id" element={<Advanced />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
