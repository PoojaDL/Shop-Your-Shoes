import { useContext } from "react";
import CartContext from "../../Store/cart-context";
const Cart = () => {
  const ctx = useContext(CartContext);
  const cartItems = ctx.items;
  let totalPrice = 0;
  const itemsList = cartItems.map((item) => {
    const sizesChose = item.buttonClick;
    let largeSized = 0;
    let mediumSized = 0;
    let smallSized = 0;
    let totalShoesInList = 0;
    let totalAmountPerList = 0;
    for (let i = 0; i < sizesChose.length; i++) {
      if (item.buttonClick[i].type === "Large") {
        largeSized++;
      }
      if (item.buttonClick[i].type === "Medium") {
        mediumSized++;
      }
      if (item.buttonClick[i].type === "Small") {
        smallSized++;
      }
      totalShoesInList = largeSized + mediumSized + smallSized;
      totalAmountPerList = totalShoesInList * item.price;
    }
    totalPrice += totalAmountPerList;
    return (
      <li key={item.id}>
        {`${item.itemName}-${item.description}-${item.price}`}
        <span>{largeSized > 0 && ` - Large: ${largeSized}`}</span>
        <span>{mediumSized > 0 && ` - Medium: ${mediumSized}`}</span>
        <span>{smallSized > 0 && ` - Small: ${smallSized}`}</span>
      </li>
    );
  });

  ctx.totalAmount = totalPrice;

  return (
    <div>
      <ul>{itemsList}</ul>
      <h3>{totalPrice > 0 && totalPrice}</h3>
    </div>
  );
};

export default Cart;
