let transientState = {
  colorId: 0,
  interiorId: 0,
  packageId: 0,
  wheelsId: 0,
  typeId: 0,
};

export const setColor = (chosenColor) => {
  transientState.colorId = chosenColor;
};

export const setInterior = (chosenInterior) => {
  transientState.interiorId = chosenInterior;
};

export const setTech = (chosenTech) => {
  transientState.packageId = chosenTech;
};

export const setWheels = (chosenWheels) => {
  transientState.wheelsId = chosenWheels;
};

export const setType = (chosenType) => {
  transientState.typeId = chosenType;
};

export const saveOrder = async () => {
  if (
    transientState.colorId === 0 ||
    transientState.interiorId === 0 ||
    transientState.packageId === 0 ||
    transientState.wheelsId === 0 ||
    transientState.typeId === 0
  ) {
    window.alert("Please complete your order");
  } else {
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

    transientState = {
      colorId: 0,
      interiorId: 0,
      packageId: 0,
      wheelsId: 0,
      typeId: 0,
    };
  }
};
