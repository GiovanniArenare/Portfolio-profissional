import ExperienciaCard from "../components/ExperienciaCard";
import "./Experiencias.css";
import FloatingLines from "../components/FloatingLines";

function Experiencias() {
  return (
    <main className="experiencias">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={6}
          lineDistance={8}
          bendRadius={8}
          bendStrength={-2}
          interactive={false}
          parallax={true}
          animationSpeed={0.8}
          linesGradient={["#0bd800", "#080808", "#044b00"]}
        />

      <div className="experiencias-conteudo">

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

      </div>

    </main>
  );
}

export default Experiencias;