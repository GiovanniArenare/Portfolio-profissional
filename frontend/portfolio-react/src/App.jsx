import { BrowserRouter, Routes, Route } from "react-router-dom";
import PillNav from "./components/PillNav";
import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import Experiencias from "./pages/Experiencias";
import Contato from "./pages/Contato";
import {
  LanguageProvider,
  useLanguage,
} from "./components/LanguageContext";

function AppContent() {
  const { language, changeLanguage } = useLanguage();

  const navItems = [
    { label: language === "pt" ? "Sobre Mim" : "About Me", href: "/" },
    { label: language === "pt" ? "Projetos" : "Projects", href: "/projetos" },
    {
      label: language === "pt" ? "Experiências" : "Experience",
      href: "/experiencias",
    },
    { label: language === "pt" ? "Contato" : "Contact", href: "/contato" },
  ];

  return (
    <>
      <PillNav
        items={navItems}
        language={language}
        onLanguageChange={changeLanguage}
        baseColor="#070707"
        pillColor="#070707"
        pillTextColor="#0bd800"
        hoveredPillTextColor="#ffffff"
        initialLoadAnimation={false}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/experiencias" element={<Experiencias />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </LanguageProvider>
  );
}