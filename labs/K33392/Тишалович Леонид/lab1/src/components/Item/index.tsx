import style from "./Item.module.sass";

type ItemProps = {
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
        <div className={style.priceHolder}>
          <p onClick={addToCart} className={style.price}>
            ${price}
          </p>
        </div>
      </div>
    </div>
  );
};
