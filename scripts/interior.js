export const getInteriors = async () => {
  const response = await fetch("http://localhost:8088/interior");
  const interiors = await response.json();

  let html = `<h3> Choose Your Interior! </h3>
                <select id="interior_choice">
                    <option value="0"> Choose an interior...</option>`;
  const interiorArray = interiors.map((interior) => {
    return `<option value="${interior.id}"> ${interior.description} </option>`;
  });
  html += interiorArray.join("");
  html += `</select>`;
  return html;
};
