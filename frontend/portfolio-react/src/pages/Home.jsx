import { Link } from "react-router-dom";
import "./Home.css";
import fotoPerfil from "../assets/foto-perfil.jpeg";

function Home() {
    return (
        <main className="home">
            <section className="foto-perfil">
                <img src={fotoPerfil} alt="Foto de Giovanni" />
            </section>

            <section className="home-content">
                <p className="greeting">Olá, eu sou</p>

                <h1>Giovanni Arenare</h1>

                <h2>Estudante de Engenharia de Software</h2>

                <p className="description">
                    Sou estudante de Engenharia de Software e tenho interesse
                    em desenvolvimento de aplicações e tecnologia.
                </p>
                <div className="home-buttons">
                    <Link to="/projetos">Ver projetos</Link>
                    <Link to="/contato">Entrar em contato</Link>
                </div>
            </section>
        </main>
    );
}

export default Home;