import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return(
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<h1>Home</h1>}/>
        <Route path="/kakao" element={<h1>Kakao Detection</h1>}/>
        <Route path="/image" element={<h1>Image AI Check</h1>}/>
        <Route path="/text" element={<h1>Text AI Check</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;