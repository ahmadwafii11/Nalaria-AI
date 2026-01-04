import "./index.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Beranda from "./pages/Beranda";
import Alat from "./pages/Alat";

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
        </Routes>
      </div>
    </Router>
  );
};