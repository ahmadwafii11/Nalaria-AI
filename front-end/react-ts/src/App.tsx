import "./index.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Beranda from "./pages/Beranda";

function App() {
  return(
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Beranda/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;