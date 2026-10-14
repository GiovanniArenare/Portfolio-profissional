import { Link } from "react-router-dom";
import "./Home.css";
import foto from "../assets/foto1.jpeg";
import WakaTime from "../components/WakaTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import TopologyField from "../components/TopologyField";
import { useLanguage } from "../components/LanguageContext";

function Home() {
    const { language } = useLanguage();
    const isEnglish = language === "en";

    return (
        <main>
            <TopologyField
                hue={0}
                saturation={1}
                brightness={1}
                speed={1}
            />

            <div className="home">
                <section className="home-content">
                    <p className="greeting">
                        {isEnglish ? "Hello, I'm" : "Olá, eu sou"}
                    </p>

                    <h1>Giovanni<br />Arenare</h1>

                    <h2>
                        {isEnglish
                            ? "Software Engineering Student"
                            : "Estudante de Engenharia de Software"}
                    </h2>

                    <p className="description">
                        {isEnglish
                            ? "I'm from Contagem, Brazil, and a student at PUC Minas. I'm interested in application development and technology, aiming to turn ideas into real projects through programming."
                            : "Sou de Contagem, estudante da PUC Minas. Tenho interesse em desenvolvimento de aplicações e tecnologia, buscando transformar ideias em projetos reais por meio da programação."}
                    </p>

                    <div className="home-buttons">
                        <Link to="/projetos">
                            {isEnglish ? "View projects ↗" : "Ver projetos ↗"}
                        </Link>

                        <Link to="/contato">
                            {isEnglish ? "Get in touch" : "Entre em contato"}
                        </Link>
                    </div>
                </section>
            </div>

            <div className="home-wakatime">
                <WakaTime />
            </div>

            <footer className="home-footer">
                <div className="footer-profile">
                    <img
                        src={foto}
                        alt={isEnglish ? "Photo of Giovanni" : "Foto de Giovanni"}
                    />

                    <div>
                        <strong>Giovanni Arenare</strong>
                        <span>
                            {isEnglish
                                ? "Aspiring Developer"
                                : "Desenvolvedor em formação"}
                        </span>
                    </div>
                </div>

                <div className="footer-socials">
                    <a
                        href="https://github.com/GiovanniArenare"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/giovanni-arenare-a35528442/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>

                    <a
                        href="https://www.instagram.com/arenareg/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>

                    <Link
                        to="/contato"
                        aria-label={isEnglish ? "Email and contact" : "E-mail e contato"}
                    >
                        <FontAwesomeIcon icon={faEnvelope} />
                    </Link>
                </div>

                <span className="footer-copy">
                    © {new Date().getFullYear()} Giovanni Arenare
                </span>
            </footer>
        </main>
    );
}

export default Home;