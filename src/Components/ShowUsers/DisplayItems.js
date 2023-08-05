import { useContext } from "react";
import AddButtons from "./AddButtons";
import CartContext from "../../Store/cart-context";

const DisplayItems = (props) => {
  const ctx = useContext(CartContext);

  const buttonValue = (value) => {
    ctx.updateItem({
      id: value[2].id,
      type: value[1],
      qty: value[0],
    });

    ctx.addItem({
      id: value[2].id,
      itemName: value[2].itemName,
      description: value[2].description,
      price: value[2].price,
      sizes: {
        large: value[2].sizes.large,
        medium: value[2].sizes.medium,
        small: value[2].sizes.small,
      },
    });
    console.log(ctx);
  };

  const itemsList = props.items.map((item) => (
    <li>
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
