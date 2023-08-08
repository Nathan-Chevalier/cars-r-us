const transientState = {
  id: 0,
  colorId: 0,
  interiorId: 0,
  packageId: 0,
  wheelsId: 0,
  timestamp: 0,
};

export const setColor = (chosenColor) => {
  transientState.colorId = chosenColor;
  console.log(transientState);
};

export const setInterior = (chosenInterior) => {
  transientState.interiorId = chosenInterior;
  console.log(transientState);
};

export const setTech = (chosenTech) => {
  transientState.packageId = chosenTech;
  console.log(transientState);
};

export const setWheels = (chosenWheels) => {
  transientState.wheelsId = chosenWheels;
  console.log(transientState);
};

export const saveOrder = async () => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientState),
  };

  const response = await fetch("http://localhost:8088/orders", postOptions);

  const saveEvent = new CustomEvent("orderSaved");
  document.dispatchEvent(saveEvent);
};
