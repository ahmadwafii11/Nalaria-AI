import "./index.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Beranda from "./pages/Beranda";
import Alat from "./pages/Alat";
import DetailAlat from "./pages/DetailAlat";
import Kontributor from "./pages/Kontributor";
import KontributorData from "./pages/Kontributor-Data";
import KontributorSurvei from "./pages/Kontributor-Survei";

export default function App() {
  return(
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <Beranda/>
            }
          />
          <Route
            path="/alat"
            element={
              <Alat/>
            }
          />
          <Route
            path="/alat/:toolId"
            element={
              <DetailAlat />
            }
          />
          <Route
            path="/kontributor"
            element={
              <Kontributor />
            }
          />
          <Route
            path="/kontributor/kontributor-data"
            element={
              <KontributorData />
            }
          />
          <Route
            path="/kontributor/kontributor-survei"
            element={
              <KontributorSurvei />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};