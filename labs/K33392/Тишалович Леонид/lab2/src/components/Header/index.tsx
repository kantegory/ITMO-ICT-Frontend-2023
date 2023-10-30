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
  onSearch?: (query: string) => void;
};

export const Header = ({
  setSelectedGender,
  cartItems,
  onSearch,
}: HeaderProps) => {
  const [isCartPopupVisible, setCartPopupVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);

    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  const handleGenderClick = (gender: string) => {
    setSelectedGender(gender);
  };

  const handleCartIconClick = () => {
    setCartPopupVisible((prev) => !prev);
  };

  return (
    <header className={style.wrapper}>
      <img onClick={() => handleGenderClick("all")} src={logoSvg} alt="Лого" />
      <nav className={style.categories}>
        <button onClick={() => handleGenderClick("male")}>Men</button>
        <button onClick={() => handleGenderClick("female")}>Women</button>
      </nav>
      <input
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div className={style.headerBtns}>
        <button>
          <img src={heratSvg} alt="Избранное" />
        </button>
        <button>
          <img src={userSvg} alt="Профиль" />
        </button>
        <button className={style.cartWrapper}>
          <div onClick={handleCartIconClick}>
            <img src={shoppingCartSvg} />
            {isCartPopupVisible && <CartPopup items={cartItems} />}
          </div>
        </button>
      </div>
    </header>
  );
};
