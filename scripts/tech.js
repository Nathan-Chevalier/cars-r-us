import { setTech } from "./transient.js";

export const getTech = async () => {
  document.addEventListener("change", techChange);
  const response = await fetch("http://localhost:8088/packages");
  const techs = await response.json();

  let html = `<h3> Choose Your Tech Package </h3>
                <select id="tech_choice">
                    <option value="0"> Choose a tech package... </option>`;
  const techArray = techs.map((tech) => {
    return `<option value="${tech.id}"> ${tech.description} </option>`;
  });
  html += techArray.join("");
  html += `</select>`;
  return html;
};

const techChange = (changeEvent) => {
  if (changeEvent.target.id === "tech_choice") {
    const converted = parseInt(changeEvent.target.value);
    setTech(converted);
  }
};
