import React from "react";

const AddButtons = (props) => {
  let size = props.itemSent.sizes;
  let valueToButton;
  const sendValue = (event) => {
    event.preventDefault();

    if (event.target.name === "Large") {
      valueToButton = size.large--;
    }
    if (event.target.name === "Medium") {
      valueToButton = size.medium--;
    }
    if (event.target.name === "Small") {
      valueToButton = size.small--;
    }
    props.onclick([valueToButton, event.target.name, props.itemSent]);

    if (valueToButton < 1) {
      console.log((event.target.style.display = "none"));
    }
  };

  return (
    <React.Fragment>
      {size.large > 0 && (
        <button
          type="button"
          name="Large"
          value={size.large}
          onClick={sendValue}
        >
          {`Large (${size.large})`}
        </button>
      )}
      {size.medium > 0 && (
        <button
          type="button"
          name="Medium"
          value={size.medium}
          onClick={sendValue}
        >{`Medium (${size.medium})`}</button>
      )}
      {size.small > 0 && (
        <button
          type="button"
          name="Small"
          value={size.small}
          onClick={sendValue}
        >{`Small (${size.small})`}</button>
      )}
    </React.Fragment>
  );
};

export default AddButtons;
