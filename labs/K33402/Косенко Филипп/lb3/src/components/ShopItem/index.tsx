import "./ShopItem.sass";
import  Modal  from "../../components/Modal";
import { useState} from "react";

type ShopItemProps = {
  title: string;
  itemImg: string;
  description: string;
  price: number;
};

export const ShopItem = ({
  title,
  itemImg,
  description,
  price,
}: ShopItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
      setIsOpen(true);
    };
    
  const closeModal = () => {
  setIsOpen(false);
  };
  return (
    <><div className="shopitem-container">
      <img className="shopitem-img" src={itemImg} />
      <p>{title}</p>
      <p>{description}</p>
      <div className="shopitem-purchase-div">
        <h2>{price}руб.</h2>
        <button className="shopitem-purchase-button" onClick={openModal}>Купить</button>
      </div>

    </div><Modal isOpen={isOpen} onClose={closeModal} /></>
    
  );
};
