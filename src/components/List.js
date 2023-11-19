const data = [
  {
    id: "1",
    title: "Tiramisu",
    description: "The best tiramisu in town",
    image: "",
    price: "$5.00",
  },
  {
    id: "2",
    title: "Lemon Ice cream",
    description: "Mind blowing taste",
    image: "",
    price: "$4.5",
  },
  {
    id: "3",
    title: "Chocolate mouse",
    description: "The best Chocolate in town",
    image: "",
    price: "$10.00",
  },
];

const topDesserts = data.map((dessert) => {
  return {
    content: `${dessert.title} - ${dessert.description}`,
    price: dessert.price,
  };
});
export default function List() {
  const itemList = data.map((dessert) => {
    const itemText = `${dessert.title} - ${dessert.price}`;
    return <li>{itemText}</li>;
  });
  return (
    <div>
      <ul>{itemList}</ul>
    </div>
  );
}
