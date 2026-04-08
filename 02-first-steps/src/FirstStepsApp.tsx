import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: 'Nintendo Switch 2', quantity: 1 },
  { productName: 'Pro Controller', quantity: 5 },
  { productName: 'Super Smash', quantity: 8 },
];

export function FirsStepsApp() {
  return (
    <>
      <h1>Carrito de compra</h1>

      {itemsInCart.map(({ productName, quantity }) => (
        <ItemCounter key={productName} name={productName} quantity={quantity} />
      ))}

      {/* <ItemCounter name='Nintendo Switch 2' quantity={3} />
      <ItemCounter name='Pro Controller' quantity={5} />
      <ItemCounter name='Super Smash' quantity={2} /> */}
    </>
  );
}