import ExperienciaCard from "../components/ExperienciaCard";
import "./Experiencias.css";

function Experiencias() {
  return (
    <main className="experiencias">
      <section className="experiencias-header">
        <p>Minha trajetória</p>

        <h1>Experiências</h1>

        <span>
          Minha formação e experiências no desenvolvimento de projetos.
        </span>
      </section>

      <section className="experiencias-timeline">

        <ExperienciaCard
          periodo="2026 – Atualmente"
          titulo="Engenharia de Software — Puc Minas"
          descricao="Formação em Engenharia de Software, com estudos em programação, desenvolvimento web, banco de dados, engenharia de software e desenvolvimento de sistemas."
        />

      </section>
    </main>
  );
}

export default Experiencias;