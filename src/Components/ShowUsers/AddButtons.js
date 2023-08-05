import React from "react";

const AddButtons = (props) => {
  const sendValue = (event) => {
    event.preventDefault();
    props.onclick([event.target.value, event.target.name, props.itemSent]);
  };

  return (
    <React.Fragment>
      <button
        type="button"
        name="Large"
        value={props.itemSent.sizes.large}
        onClick={sendValue}
      >{`Large (${props.itemSent.sizes.large})`}</button>
      <button
        type="button"
        name="Medium"
        value={props.itemSent.sizes.medium}
        onClick={sendValue}
      >{`Medium (${props.itemSent.sizes.medium})`}</button>
      <button
        type="button"
        name="Small"
        value={props.itemSent.sizes.small}
        onClick={sendValue}
      >{`Small (${props.itemSent.sizes.small})`}</button>
    </React.Fragment>
  );
};

export default AddButtons;
