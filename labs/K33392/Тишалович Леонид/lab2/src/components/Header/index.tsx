import style from "./Header.module.sass";
import { CartPopup } from "../CartPopup";
import { CartItem } from "../../pages/Main";
import { useState, useEffect } from "react";
import lightTheme from "../../assets/lightTheme.png";
import darkTheme from "../../assets/darkTheme.png";
import { Icon } from "../index";

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
  const [isCartPopupVisible, setCartPopupVisible] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [theme, setTheme] = useState<string>("light");
  const [icon, setIcon] = useState(lightTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    setIcon((prevIcon) => (prevIcon === lightTheme ? darkTheme : lightTheme));
  };

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
      <div
        className={style.logoWrapper}
        onClick={() => handleGenderClick("all")}
      >
        <Icon id="Euphoria" />
      </div>
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
          <Icon id="Heart" />
        </button>
        <button>
          <Icon id="User" />
        </button>
        <button>
          <div onClick={handleCartIconClick}>
            <Icon id="Cart" />
            {isCartPopupVisible && <CartPopup items={cartItems} />}
          </div>
        </button>
        <button onClick={toggleTheme}>
          <img className={style.themeImg} alt="Лого темы" src={icon} />
        </button>
      </div>
    </header>
  );
};
