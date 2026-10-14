import ProjetoCard from "../components/ProjetoCard";
import "./Projetos.css";
import VibeHub from "../assets/vibehub.png";
import Game_python from "../assets/Sonica.png";
import Login from "../assets/login.png";
import SquareBackground from "../components/SquareBackground";
import { useLanguage } from "../components/LanguageContext";

function Projetos() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <main className="projetos">
      <SquareBackground />

      <section className="projetos-header">
        <p>{isEnglish ? "My Work" : "Meu trabalho"}</p>

        <h1>{isEnglish ? "Projects" : "Projetos"}</h1>

        <span>
          {isEnglish
            ? "Some of the projects I've developed throughout my journey."
            : "Alguns dos projetos que desenvolvi durante minha trajetória."}
        </span>
      </section>

      <section className="projetos-timeline">
        <ProjetoCard
          ano="2026"
          nome="VibeHub"
          descricao={
            isEnglish
              ? "A web platform for recommending movies and games, featuring a login system, favorites, charts, and the ability to add new content."
              : "Plataforma web desenvolvida para recomendação de filmes e jogos, contando com sistema de login, favoritos, gráficos e cadastro de novos conteúdos."
          }
          tecnologias={["JavaScript", "HTML", "CSS", "JSON"]}
          github="https://github.com/GiovanniArenare/VibeHub"
          imagem={VibeHub}
        />

        <ProjetoCard
          ano="2026"
          nome="Sonica Runner"
          descricao={
            isEnglish
              ? "A game developed in Python using Pygame, inspired by the Infinite Runner genre. It features obstacles, a lives system, scoring, a high score, and different game states."
              : "Jogo desenvolvido em Python utilizando Pygame, inspirado no estilo Infinite Runner. O projeto possui obstáculos, sistema de vidas, pontuação, recorde e diferentes estados de jogo."
          }
          tecnologias={["Python", "Pygame"]}
          github="https://github.com/GiovanniArenare/Game_python"
          imagem={Game_python}
        />

        <ProjetoCard
          ano="2026"
          nome="Login"
          descricao={
            isEnglish
              ? "A web application developed with Spring Boot, focused on implementing a login system, user authentication, and registration."
              : "Aplicação web desenvolvida com Spring Boot, com foco na criação de um sistema de login, autenticação de usuários e cadastro."
          }
          tecnologias={["Java", "Spring Boot", "HTML", "CSS"]}
          github="https://github.com/GiovanniArenare/diaw/tree/main/Login"
          imagem={Login}
        />
      </section>
    </main>
  );
}

export default Projetos;