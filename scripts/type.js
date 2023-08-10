export const getTypes = async () => {
  const response = await fetch("http://localhost:8088/types");
  const types = await response.json();
  let html = `<h3> Choose your vehicle type</h3>
                <select id="type_choice">
                    <option value="0"> Choose a vehicle type... </option>`;
  const typeArray = types.map((type) => {
    return `<option value="${type.id}"> ${type.description} </option>`;
  });
  html += typeArray.join("");
  html += `</select>`;
  return html;
};
