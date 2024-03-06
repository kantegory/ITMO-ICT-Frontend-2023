import { Header } from "../../Components/Header/Header";
import "./MainPage.scss";
import { ShopItem } from "../../Components/ShopItem/ShopItem";

export type ShopItemData = {
  title: string;
  cover: string;
  price: number;
};

export const MainPage = () => {
  return (
    <div className="mainPageContainer">
      <Header />
      <div className="mainContentContainer">
        <h1>Все товары</h1>
        <select className="mainPageSelect">
          <option value="">Выберите метод сортировки</option>
          <option value="Сортировать по названию">
            Сортировать по названию
          </option>
          <option value="Сортировать по цене">Сортировать по цене</option>
        </select>
        <div className="mainSelection">
          <ShopItem
            title="Чёрная футболка Nike"
            cover="https://vipcross.ru/upload/iblock/eec/h25lpnsh00jmgj085ta2a39lsnj4lt1u.jpg"
            price={3000}
          />
        </div>
      </div>
    </div>
  );
};
