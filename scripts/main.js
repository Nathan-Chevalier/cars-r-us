import { getColors } from "./color.js";

const container = document.querySelector("#container");

const render = async () => {
  const colorHTML = await getColors();

  const outputHTML = `
        <h1> CARS-R-US </h1>
        <article class="choices">
            <section class="choices__color">
                ${colorHTML}
            </section>
            <section class="choices__color">
                CONTENT
            </section>
            <section class="choices__color">
                CONTENT
            </section>
            <section class="choices__color">
                CONTENT
            </section>
`;
  container.innerHTML = outputHTML;
};

render();
