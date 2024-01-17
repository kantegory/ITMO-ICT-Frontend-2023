import style from "./Item.module.sass";

type ItemProps = {
  id: number;
  title: string;
  img: string;
  price: number;
  brand: string;
  addToCart: () => void;
};

export const Item = ({ title, img, price, brand, addToCart }: ItemProps) => {
  return (
    <div className={style.wrapper}>
      <img className={style.cover} src={img} alt="Обложка" />
      <div className={style.textInfo}>
        <div className={style.infoHolder}>
          <p className={style.title}>{title}</p>
          <p className={style.brand}>{brand}</p>
        </div>
        <button onClick={addToCart} className={style.priceHolder}>
          <p className={style.price}>${price}</p>
        </button>
      </div>
    </div>
  );
};
