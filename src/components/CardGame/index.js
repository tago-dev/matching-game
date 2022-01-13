import "./style.css";

function CardGame(icon = "alura-pixel", alt = "Logo da Alura") {
  return /*html*/`
        <article class="card-game">
          <img src="images/${icon}.svg" alt="${alt}"/>
        </article>
    `;
}

export default CardGame;