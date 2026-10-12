import { Link } from "react-router-dom";
import "./Home.css";
import foto from "../assets/foto03.png";
import WebThreads from '../components/WebThreads';
import WakaTime from "../components/WakaTime";


function Home() {
    return (
        <>
            <WebThreads
                color1="#0bd800"
                color2="#042202"
                color3="#044b00"
                speed={0.2}
                threadCount={6}
                frequency={5}
                spread={0.15}
                taper={1}
                position={0.65}
                fanMode="center"
                glow={0.02}
                falloff={0.6}
                thickness={1.1}
                brightness={0.6}
                opacity={1}
                mirror
                shimmer={false}
                grain
                grainIntensity={0.05}
                mouseInteraction={false}
                mouseStrength={0.3}
            />

            <main className="home">
                <section className="home-content">
                    <div className="foto-perfil">
                        <img src={foto} alt="Foto de Giovanni" />
                    </div>

                    <p className="greeting">Olá, eu sou</p>

                    <h1>Giovanni Arenare</h1>

                    <h2>Estudante de Engenharia de Software</h2>

                    <p className="description">
                        Tenho interesse
                        em desenvolvimento de aplicações e tecnologia.
                    </p>

                    <div className="home-buttons">
                        <Link to="/projetos">Ver projetos</Link>
                        <Link to="/contato">Entrar em contato</Link>
                        
                    </div>

                </section>

                <WakaTime />

            </main>
        </>
    );
}

export default Home;