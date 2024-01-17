import "./FoodItem.scss";
import "../../index.scss";
type FoodItemProps = {
  title: string;
  foodImg: string;
  calories: number;
  onEatClick: () => void;
};

export const FoodItem = ({
  title,
  foodImg,
  calories,
  onEatClick,
}: FoodItemProps) => {
  return (
    <section className="foodWrapper">
      <img alt="Изображение продукта" className="foodImg" src={foodImg} />
      <h1></h1>
      <h2></h2>
      <h3>{title}</h3>
      <p>Пищевая ценность: {calories}кКал</p>
      <div className="buttonsWrapper">
        <div className="buttons">
          <button className="button" onClick={onEatClick}>
            Съел(а)
          </button>
        </div>
      </div>
    </section>
  );
};
