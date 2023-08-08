import { setColor } from "./transient.js";

export const getColors = async () => {
  document.addEventListener("change", colorChange);
  const response = await fetch("http://localhost:8088/colors");
  const colors = await response.json();

  let html = `<h3> Choose Your Color! </h3>
                <select id="color_choice">
                    <option value="0"> Choose a color...</option>`;
  const colorArray = colors.map((color) => {
    return `<option value="${color.id}"> ${color.description} </option>`;
  });
  html += colorArray.join("");
  html += `</select>`;
  return html;
};

const colorChange = (changeEvent) => {
  if (changeEvent.target.id === "color_choice") {
    const converted = parseInt(changeEvent.target.value);
    setColor(converted);
  }
};
