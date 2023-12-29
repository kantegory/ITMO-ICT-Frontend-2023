import style from "./CartPopup.module.sass";

type CartItem = {
  title: string;
  price: number;
  img: string;
};

type CartPopupProps = {
  items: CartItem[];
};

export const CartPopup = ({ items }: CartPopupProps) => {
  return (
    <div className={style.wrapper}>
      {items.length > 0 ? (
        items.map((item, index) => (
          <div key={index} className={style.item}>
            <p>{item.title}</p>
            <p>${item.price}</p>
            <img src={item.img} />
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};
