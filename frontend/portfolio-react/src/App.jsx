import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import Experiencias from "./pages/Experiencias";
import Contato from "./pages/Contato";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projetos" element={<Projetos />} />
        <Route path="/Experiencias" element={<Experiencias />} />
        <Route path="/Contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;