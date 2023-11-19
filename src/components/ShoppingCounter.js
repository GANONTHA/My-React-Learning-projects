import { useShoppingListContext } from "../providers/ShoppingProvider";

const ShoppingCounter = () => {
  const { shoppings } = useShoppingListContext();
  return (
    <div>
      <h2>You have in total {shoppings.length} to purchase today</h2>
    </div>
  );
};

export default ShoppingCounter;
