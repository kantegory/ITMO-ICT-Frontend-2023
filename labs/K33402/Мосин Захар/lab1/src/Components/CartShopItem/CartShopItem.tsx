import { ShopItemData } from "../../Pages/MainPage/MainPage";
import "./CartShopItem.scss";

export const CartShopItem = ({ title, cover, price }: ShopItemData) => {
  return (
    <div className="cartShopItemContainer">
      <img className="cartShopItemImg" src={cover} />
      <div className="cartShopItemInfo">
        <h3>{title}</h3>
        <p className="cartShopItemPrice">{price} руб.</p>
      </div>
    </div>
  );
};
