import { useLanguage } from "./LanguageContext";

function ProjetoCard({ ano, nome, descricao, tecnologias, github, imagem }) {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <article className="projeto-card">
      <div className="projeto-imagem">
        <img
          src={imagem}
          alt={
            isEnglish
              ? `Image of the ${nome} project`
              : `Imagem do projeto ${nome}`
          }
        />
      </div>

      <div className="projeto-info">
        <span className="projeto-data">{ano}</span>

        <h2>{nome}</h2>

        <p>{descricao}</p>

        <div className="projeto-tecnologias">
          {tecnologias.map((tecnologia) => (
            <span key={tecnologia}>{tecnologia}</span>
          ))}
        </div>

        <a href={github} target="_blank" rel="noreferrer">
          {isEnglish ? "View on GitHub →" : "Ver no GitHub →"}
        </a>
      </div>
    </article>
  );
}

export default ProjetoCard;