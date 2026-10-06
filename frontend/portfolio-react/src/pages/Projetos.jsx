import ProjetoCard from "../components/ProjetoCard";
import "./Projetos.css";
import VibeHub from "../assets/vibehub.png";
import Game_python from "../assets/sonica.png";
import Login from "../assets/login.png";

function Projetos() {
  return (
    <main className="projetos">
      <section className="projetos-header">
        <p>Meu trabalho</p>

        <h1>Projetos</h1>

        <span>
          Alguns dos projetos que desenvolvi durante minha trajetória.
        </span>
      </section>

      <section className="projetos-timeline">

        <ProjetoCard
          ano="2026"
          nome="VibeHub"
          descricao="Plataforma web desenvolvida para recomendação de filmes e jogos, contando com sistema de login, favoritos, gráficos e cadastro de novos conteúdos."
          tecnologias={["JavaScript", "HTML", "CSS", "JSON"]}
          github="https://github.com/GiovanniArenare/VibeHub"
          imagem={VibeHub}
        />

        <ProjetoCard
          ano="2026"
          nome="Sonica Runner"
          descricao="Jogo desenvolvido em Python utilizando Pygame, inspirado no estilo Infinite Runner. O projeto possui obstáculos, sistema de vidas, pontuação, recorde e diferentes estados de jogo."
          tecnologias={["Python", "Pygame"]}
          github="https://github.com/GiovanniArenare/Game_python"
          imagem={Game_python}
        />

        <ProjetoCard
          ano="2026"
          nome="Login"
          descricao="Aplicação web desenvolvida com Spring Boot, com foco na criação de um sistema de login, autenticação de usuários e cadastro."
          tecnologias={["Java", "Spring Boot", "HTML", "CSS"]}
          github="https://github.com/GiovanniArenare/diaw/tree/main/Login"
          imagem={Login}
        />

      </section>
    </main>
  );
}

export default Projetos;