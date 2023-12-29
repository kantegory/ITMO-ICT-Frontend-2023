import style from "./Header.module.sass";
import logoSvg from "../../assets/Logo.svg";
import heratSvg from "../../assets/heart.svg";
import userSvg from "../../assets/user.svg";
import shoppingCartSvg from "../../assets/shoppingСart.svg";

type HeaderProps = {
  setSelectedGender: (gender: string) => void;
};

export const Header = ({ setSelectedGender }: HeaderProps) => {
  const handleGenderClick = (gender: string) => {
    setSelectedGender(gender);
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
        <div>
          <img src={shoppingCartSvg} />
        </div>
      </div>
    </div>
  );
};
