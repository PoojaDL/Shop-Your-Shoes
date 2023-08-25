import { useContext } from "react";
import AddButtons from "./AddButtons";
import CartContext from "../../Store/cart-context";

const DisplayItems = (props) => {
  const ctx = useContext(CartContext);

  const buttonValue = (value) => {
    if (value[0] >= 1) {
      ctx.addItem({
        key: value[2].id,
        id: value[2].id,
        itemName: value[2].itemName,
        description: value[2].description,
        price: value[2].price,
        buttonClick: [
          {
            type: value[1],
            qty: value[0],
          },
        ],
      });
    }

    props.onchange(true);
  };

  const itemsList = props.items.map((item) => (
    <li key={item.id}>
      {`${item.itemName} - ${item.description} - ${item.price}`}
      <AddButtons itemSent={item} onclick={buttonValue} />
    </li>
  ));

  return (
    <div>
      <ul>{itemsList}</ul>
    </div>
  );
};

export default DisplayItems;
