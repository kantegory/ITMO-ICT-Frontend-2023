import "./ShopItem.scss";
import axios from "axios";
import { ShopItemData } from "../../Pages/MainPage/MainPage";

export const ShopItem = ({ title, cover, price }: ShopItemData) => {
  const addToCart = () => {
    const itemData = {
      title,
      cover,
      price,
    };
    axios
      .post("http://localhost:3000/cartItems", itemData)
      .then(() => {
        alert("Товар добавлен в корзину!");
      })
      .catch((error) => {
        console.error(
          "Произошла ошибка при добавлении товара в корзину",
          error
        );
      });
  };

  return (
    <div className="shopItemContainer">
      <img src={cover} className="shopItemImg" />
      <h3 className="shopItemTitle">{title}</h3>
      <div className="shopItemBuy">
        <p>{price} руб.</p>
        <button className="shopItemBtn" onClick={addToCart}>
          Купить
        </button>
      </div>
    </div>
  );
};
