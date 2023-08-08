import { getColors } from "./color.js";
import { getInteriors } from "./interior.js";

const container = document.querySelector("#container");

const render = async () => {
  const colorHTML = await getColors();
  const interiorHTML = await getInteriors();

  const outputHTML = `
        <h1> CARS-R-US </h1>
        <article class="choices">
            <section class="choices__color">
                ${colorHTML}
            </section>
            <section class="choices__interior">
                ${interiorHTML}
            </section>
            <section class="choices__tech">
                CONTENT
            </section>
            <section class="choices__wheels">
                CONTENT
            </section>
`;
  container.innerHTML = outputHTML;
};

render();
