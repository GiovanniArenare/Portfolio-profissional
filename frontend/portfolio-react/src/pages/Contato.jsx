
import { useState } from "react";
import "./Contato.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Topography from "../components/Topography";
const API_URL = import.meta.env.VITE_API_URL;

function Contato() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const [status, setStatus] = useState("");
  const [enviando, setEnviando] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((formAnterior) => ({
      ...formAnterior,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setEnviando(true);
    setStatus("");

    try {
      const resposta = await fetch(`${API_URL}/api/mensagens`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: form.nome,
            email: form.email,
            assunto: form.assunto,
            conteudo: form.mensagem,
          }),
        }
      );

      if (!resposta.ok) {
        throw new Error("Não foi possível enviar a mensagem.");
      }

      setStatus("Mensagem enviada com sucesso!");

      setForm({
        nome: "",
        email: "",
        assunto: "",
        mensagem: "",
      });
    } catch {
      setStatus(
        "Não foi possível enviar sua mensagem. Tente novamente."
      );
    } finally {
      setEnviando(false);
    }
  }

  return (
    <>
      <Topography
        lowColor="#0bd800"
        midColor="#044b00"
        highColor="#98f398"
        speed={0.35}
        morphAmount={2}
        morphSpeed={0.06}
        bands={1}
        thickness={0.01}
        scale={3}
        pixelSize={1}
        glow={1.6}
        colorMode="elevation"
        contrast={3}
        brightness={1}
        fillBands={false}
        opacity={1}
        grain
        grainIntensity={0.05}
        mouseInteraction={false}
        mouseRadius={0.3}
        mouseStrength={0.4}
      />

      <main className="contato">
        <section className="contato-conteudo">
          <div className="contato-info">
            <p className="verde">Vamos conversar</p>

            <h1>Entre em contato</h1>

            <p className="texto">
              Entre em contato comigo através das minhas redes ou envie uma mensagem.
            </p>

            <a href="mailto:giovanniarenaramota@gmail.com"
              aria-label="E-mail">
              <div className="box1">
                <div className="box2">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="g">
                  <span className="m">E-MAIL</span>
                  <span className="l">
                    giovanniarenaramota@gmail.com
                  </span>
                </div>
              </div>
            </a>

            <a>
              <div className="box1">
                <div className="box2">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className="g">
                  <span className="m">LOCALIZAÇÃO</span>
                  <span className="l">Contagem, Brasil</span>
                </div>
              </div>
            </a>

            <ul>
              <li>
                <a
                  href="https://github.com/GiovanniArenare"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <div className="box3">
                    <FontAwesomeIcon icon={faGithub} />
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/giovanni-arenare-a35528442/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <div className="box3">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="https://x.com/ArenareGiovanni"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X"
                >
                  <div className="box3">
                    <FontAwesomeIcon icon={faXTwitter} />
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/arenareg/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <div className="box3">
                    <FontAwesomeIcon icon={faInstagram} />
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <form
            className="contato-form"
            onSubmit={handleSubmit}
          >
            <div className="nomemail">
              <div>
                <label htmlFor="nome">Nome</label>

                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Seu nome completo"
                  value={form.nome}
                  onChange={handleChange}
                  maxLength={100}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">E-mail</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="seuemail@email.com"
                  value={form.email}
                  onChange={handleChange}
                  maxLength={150}
                  required
                />
              </div>
            </div>

            <label htmlFor="assunto">Assunto</label>

            <input
              type="text"
              id="assunto"
              name="assunto"
              placeholder="Do que se trata?"
              value={form.assunto}
              onChange={handleChange}
              maxLength={150}
              required
            />

            <label htmlFor="mensagem">Mensagem</label>

            <textarea
              id="mensagem"
              name="mensagem"
              placeholder="Escreva sua mensagem..."
              rows="6"
              value={form.mensagem}
              onChange={handleChange}
              maxLength={5000}
              required
            />

            {status && (
              <p role="status" aria-live="polite">
                {status}
              </p>
            )}

            <button type="submit" disabled={enviando}>
              {enviando ? "Enviando..." : "Enviar mensagem"}
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Contato;
