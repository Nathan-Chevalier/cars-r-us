import { getColors } from "./color.js";
import { getInteriors } from "./interior.js";
import { getTech } from "./tech.js";
import { getWheels } from "./wheels.js";

const container = document.querySelector("#container");

const render = async () => {
  const colorHTML = await getColors();
  const interiorHTML = await getInteriors();
  const techHTML = await getTech();
  const wheelHTML = await getWheels();

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
                ${techHTML}
            </section>
            <section class="choices__wheels">
                ${wheelHTML}
            </section>
`;
  container.innerHTML = outputHTML;
};

render();
