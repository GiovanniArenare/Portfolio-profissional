import { useEffect, useState } from "react";
import "./WakaTime.css";
import { useLanguage } from "./LanguageContext";

const API_URL =
  "https://portfolio-profissional-api.onrender.com/api/wakatime";

export default function WakaTime() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const [stats, setStats] = useState(null);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        return response.json();
      })
      .then((json) => {
        console.log("API response:", json);
        console.log("Statistics:", json.data);

        setStats(json.data);
      })
      .catch((erro) => {
        console.error("WakaTime error:", erro);
        setErro(true);
      });
  }, []);

  if (erro) {
    return (
      <p className="wakatime-erro">
        {isEnglish
          ? "Unable to load statistics."
          : "Não foi possível carregar as estatísticas."}
      </p>
    );
  }

  if (!stats) {
    return (
      <p className="wakatime-loading">
        {isEnglish
          ? "Loading statistics..."
          : "Carregando estatísticas..."}
      </p>
    );
  }

  return (
    <section className="wakatime-section">
      <h2>
        {isEnglish ? "Statistics" : "Estatísticas"}{" "}
        <span>WakaTime</span>
      </h2>

      <div className="wakatime-cards">
        <article className="wakatime-card">
          <p className="wakatime-label">
            {isEnglish
              ? "Total coding time"
              : "Tempo total programando"}
          </p>

          <h3>{stats.human_readable_total}</h3>

          <p className="wakatime-description">
            {isEnglish
              ? "Time tracked by WakaTime"
              : "Tempo registrado pelo WakaTime"}
          </p>
        </article>

        <article className="wakatime-card">
          <p className="wakatime-label">
            {isEnglish
              ? "Most used languages"
              : "Linguagens mais utilizadas"}
          </p>

          <div className="wakatime-languages">
            {stats.languages.slice(0, 5).map((linguagem) => (
              <div
                className="wakatime-language"
                key={linguagem.name}
              >
                <div className="wakatime-language-info">
                  <span>{linguagem.name}</span>
                  <span>{linguagem.percent.toFixed(1)}%</span>
                </div>

                <div className="wakatime-bar">
                  <div
                    className="wakatime-bar-fill"
                    style={{
                      width: `${linguagem.percent}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>

      <p className="wakatime-footer">
        {isEnglish ? "Data provided by " : "Dados fornecidos por "}

        <a
          href="https://wakatime.com/@782aa992-c7ba-4ff2-8e6e-3d0ce6762442"
          target="_blank"
          rel="noreferrer"
        >
          WakaTime
        </a>
      </p>
    </section>
  );
}