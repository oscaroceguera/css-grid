import React from "react";
import "./styles.css";

const FancyHomepage = () => {
  return (
    <div>
      <h1>Fancy homepage</h1>
      <main class="fancy-homepage">
        <div class="toolbar">Toolbar</div>
        <div class="title">Main title</div>
        <div class="panel">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            delectus voluptatem maxime modi nesciunt officia.
          </p>
        </div>
        <div class="caroussel">
          <button class="caroussel-item">item 1</button>
          <button class="caroussel-item">item 2</button>
          <button class="caroussel-item">item 3</button>
        </div>
      </main>
    </div>
  );
};

export default FancyHomepage;
