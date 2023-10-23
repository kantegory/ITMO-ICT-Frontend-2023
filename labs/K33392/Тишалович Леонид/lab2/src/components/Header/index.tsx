import style from "./Header.module.sass";
import logoSvg from "../../assets/Logo.svg";
import heratSvg from "../../assets/heart.svg";
import userSvg from "../../assets/user.svg";
import shoppingCartSvg from "../../assets/shoppingСart.svg";
import { CartPopup } from "../CartPopup";
import { CartItem } from "../../pages/Main";
import { useState } from "react";

type HeaderProps = {
  setSelectedGender: (gender: string) => void;
  cartItems: CartItem[];
};

export const Header = ({ setSelectedGender, cartItems }: HeaderProps) => {
  const [isCartPopupVisible, setCartPopupVisible] = useState(false);

  const handleGenderClick = (gender: string) => {
    setSelectedGender(gender);
  };

  const handleCartIconClick = () => {
    setCartPopupVisible((prev) => !prev);
  };

  return (
    <div className={style.wrapper}>
      <img onClick={() => handleGenderClick("all")} src={logoSvg} alt="Лого" />
      <div className={style.categories}>
        <p onClick={() => handleGenderClick("male")}>Men</p>
        <p onClick={() => handleGenderClick("female")}>Women</p>
      </div>
      <input placeholder="Search" />
      <div className={style.headerBtns}>
        <div>
          <img src={heratSvg} alt="Избранное" />
        </div>
        <div>
          <img src={userSvg} alt="Профиль" />
        </div>
        <div className={style.cartWrapper}>
          <div onClick={handleCartIconClick}>
            <img src={shoppingCartSvg} />
            {isCartPopupVisible && <CartPopup items={cartItems} />}
          </div>
        </div>
      </div>
    </div>
  );
};
