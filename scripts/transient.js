const transientState = {
  id: 0,
  colorId: 0,
  interiorId: 0,
  techId: 0,
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
  transientState.techId = chosenTech;
  console.log(transientState);
};

export const setWheels = (chosenWheels) => {
  transientState.wheelsId = chosenWheels;
  console.log(transientState);
};
