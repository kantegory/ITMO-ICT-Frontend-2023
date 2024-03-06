import "./Header.scss";

export const Header = () => {
  return (
    <div className="headerContainer">
      <h1>Clothes Shop</h1>
      <input placeholder="Найти товар..." />
      <p>Корзина</p>
    </div>
  );
};
