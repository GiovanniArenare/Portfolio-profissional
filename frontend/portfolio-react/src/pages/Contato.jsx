import { useState } from "react";
import Topologia from "../components/Topologia";
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
import { useLanguage } from "../components/LanguageContext";

const API_URL = import.meta.env.VITE_API_URL;

function Contato() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

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
      });

      if (!resposta.ok) {
        throw new Error("Failed to send message.");
      }

      setStatus(
        isEnglish
          ? "Message sent successfully!"
          : "Mensagem enviada com sucesso!"
      );

      setForm({
        nome: "",
        email: "",
        assunto: "",
        mensagem: "",
      });
    } catch {
      setStatus(
        isEnglish
          ? "Unable to send your message. Please try again."
          : "Não foi possível enviar sua mensagem. Tente novamente."
      );
    } finally {
      setEnviando(false);
    }
  }

  return (
    <>
      <Topologia />

      <main className="contato">
        <section className="contato-conteudo">
          <div className="contato-info">
            <p className="verde">
              {isEnglish ? "Let's talk" : "Vamos conversar"}
            </p>

            <h1>
              {isEnglish ? "Get in touch" : "Entre em contato"}
            </h1>

            <p className="texto">
              {isEnglish
                ? "Contact me through my social media or send me a message."
                : "Entre em contato comigo através das minhas redes ou envie uma mensagem."}
            </p>

            <a
              href="mailto:giovanniarenaramota@gmail.com"
              aria-label="E-mail"
            >
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
                <span className="m">
                  {isEnglish ? "LOCATION" : "LOCALIZAÇÃO"}
                </span>
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

          <form className="contato-form" onSubmit={handleSubmit}>
            <div className="nomemail">
              <div>
                <label htmlFor="nome">
                  {isEnglish ? "Name" : "Nome"}
                </label>

                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder={
                    isEnglish ? "Your full name" : "Seu nome completo"
                  }
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
                  placeholder={
                    isEnglish
                      ? "youremail@email.com"
                      : "seuemail@email.com"
                  }
                  value={form.email}
                  onChange={handleChange}
                  maxLength={150}
                  required
                />
              </div>
            </div>

            <label htmlFor="assunto">
              {isEnglish ? "Subject" : "Assunto"}
            </label>

            <input
              type="text"
              id="assunto"
              name="assunto"
              placeholder={
                isEnglish ? "What is it about?" : "Do que se trata?"
              }
              value={form.assunto}
              onChange={handleChange}
              maxLength={150}
              required
            />

            <label htmlFor="mensagem">
              {isEnglish ? "Message" : "Mensagem"}
            </label>

            <textarea
              id="mensagem"
              name="mensagem"
              placeholder={
                isEnglish
                  ? "Write your message..."
                  : "Escreva sua mensagem..."
              }
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
              {enviando
                ? isEnglish
                  ? "Sending..."
                  : "Enviando..."
                : isEnglish
                  ? "Send message"
                  : "Enviar mensagem"}
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Contato;