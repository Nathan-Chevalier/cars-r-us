import { getColors } from "./color.js";
import { getInteriors } from "./interior.js";
import { getOrders } from "./orders.js";
import { save } from "./save.js";
import { getTech } from "./tech.js";
import { getWheels } from "./wheels.js";

const container = document.querySelector("#container");

const render = async () => {
  const colorHTML = await getColors();
  const interiorHTML = await getInteriors();
  const techHTML = await getTech();
  const wheelHTML = await getWheels();
  const saveHTML = await save();
  const ordersHTML = await getOrders();

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
        </article>
        <article class="order">
            ${saveHTML}
        </article>
        <article class="ordersMade">
            ${ordersHTML}
        </article>
        
`;
  container.innerHTML = outputHTML;
};

document.addEventListener("orderSaved", render);

render();
