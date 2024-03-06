import "./CartPage.scss";
import { CartShopItem } from "../../Components/CartShopItem/CartShopItem";

export const CartPage = () => {
  return (
    <div className="cartPageContainer">
      <div className="cartPageFirstSection">
        <h1>Корзина</h1>
        <div className="cartShopItemSelection">
          <CartShopItem
            title="Чёрная футболка Nike"
            cover="https://vipcross.ru/upload/iblock/eec/h25lpnsh00jmgj085ta2a39lsnj4lt1u.jpg"
            price={3000}
          />
        </div>
      </div>
      <div className="cartPageSecondSection">
        <h1>Итоговая сумма:</h1>
        <h2>100 рублей</h2>
        <button className="cartShopPageBtn">Оформить заказ</button>
      </div>
    </div>
  );
};
