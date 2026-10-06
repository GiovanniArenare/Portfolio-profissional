function ExperienciaCard({ periodo, titulo, descricao }) {
  return (
    <article className="experiencia-card">
      <span className="experiencia-data">{periodo}</span>

      <h2>{titulo}</h2>

      <p>{descricao}</p>
    </article>
  );
}

export default ExperienciaCard;