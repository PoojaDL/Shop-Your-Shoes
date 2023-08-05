import { useRef } from "react";

const UserForm = (props) => {
  const nameInput = useRef();
  const descInput = useRef();
  const priceInput = useRef();
  const largeInput = useRef();
  const mediumInput = useRef();
  const smallInput = useRef();

  const formSubmitted = (event) => {
    event.preventDefault();

    const addedItems = {
      key: Math.random().toString(),
      id: Math.random().toString(),
      itemName: nameInput.current.value,
      description: descInput.current.value,
      price: priceInput.current.value,
      sizes: {
        large: largeInput.current.value,
        medium: mediumInput.current.value,
        small: smallInput.current.value,
      },
    };

    props.onAdd(addedItems);
  };

  return (
    <div>
      <form onSubmit={formSubmitted}>
        <label>Item Name</label>
        <input type="text" ref={nameInput} />
        <label>Description</label>
        <input type="text" ref={descInput} />
        <label>Price</label>
        <input type="number" ref={priceInput} />
        <label>Large</label>
        <input type="number" ref={largeInput} />
        <label>Medium</label>
        <input type="number" ref={mediumInput} />
        <label>Small</label>
        <input type="number" ref={smallInput} />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default UserForm;
