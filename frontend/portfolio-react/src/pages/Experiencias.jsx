import ExperienciaCard from "../components/ExperienciaCard";
import "./Experiencias.css";
import SquareBackground from "../components/SquareBackground";
import { useLanguage } from "../components/LanguageContext";

function Experiencias() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <main className="experiencias">
      <SquareBackground />

      <div className="experiencias-conteudo">
        <section className="experiencias-header">
          <p>
            {isEnglish ? "My Journey" : "Minha trajetória"}
          </p>

          <h1>
            {isEnglish ? "Experience" : "Experiências"}
          </h1>

          <span>
            {isEnglish
              ? "My education and experience developing projects."
              : "Minha formação e experiências no desenvolvimento de projetos."}
          </span>
        </section>

        <section className="experiencias-timeline">
          <ExperienciaCard
            periodo={
              isEnglish ? "2026 – Present" : "2026 – Atualmente"
            }
            titulo={
              isEnglish
                ? "Software Engineering — PUC Minas"
                : "Engenharia de Software — PUC Minas"
            }
            descricao={
              isEnglish
                ? "Software Engineering studies focused on programming, web development, databases, software engineering, and systems development."
                : "Formação em Engenharia de Software, com estudos em programação, desenvolvimento web, banco de dados, engenharia de software e desenvolvimento de sistemas."
            }
          />
        </section>
      </div>
    </main>
  );
}

export default Experiencias;