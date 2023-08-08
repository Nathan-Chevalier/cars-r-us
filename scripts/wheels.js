import { setWheels } from "./transient.js";

export const getWheels = async () => {
  document.addEventListener("change", wheelChange);
  const response = await fetch("http://localhost:8088/wheels");
  const wheels = await response.json();

  let html = `<h3> Choose Your Wheels! </h3>
                    <select id="wheel_choice">
                        <option value="0"> Choose a wheel style...</option>`;
  const wheelArray = wheels.map((wheel) => {
    return `<option value="${wheel.id}"> ${wheel.description} </option>`;
  });
  html += wheelArray.join("");
  html += `</select>`;
  return html;
};

const wheelChange = (changeEvent) => {
  if (changeEvent.target.id === "wheel_choice") {
    const converted = parseInt(changeEvent.target.value);
    setWheels(converted);
  }
};
