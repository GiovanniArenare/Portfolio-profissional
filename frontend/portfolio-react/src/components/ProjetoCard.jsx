function ProjetoCard({ ano, nome, descricao, tecnologias, github, imagem }) {
  return (
    <article className="projeto-card">

      <div className="projeto-imagem">
        <img src={imagem} alt={`Imagem do projeto ${nome}`} />
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
          Ver no GitHub →
        </a>
      </div>

    </article>
  );
}

export default ProjetoCard;