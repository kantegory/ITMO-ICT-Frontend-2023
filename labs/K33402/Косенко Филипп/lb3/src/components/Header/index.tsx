import "./Header.sass";
import "../SASS/button.sass";
import "../SASS/title.sass";
import  Modal  from "../../components/Modal";
import mainLogo from "./running-man-2-64.png";
import img1 from "./app 08 hand cart 64.png";
import img2 from "./app 08 hand cart 64.png";
import img3 from "./messages 64.png";
import { useState} from "react";




export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
      };

    const closeModal = () => {
    setIsOpen(false);
    };
  return (
    <><div className="header">
          <div className="cont">
              <div className="header_hight">
                  <a href="" aria-label="logo" className="header__logo"><img src={mainLogo} alt="logo" /></a>
                  <div className="header_hight__text">
                      <div className="header_hight__text__hight">Официальный представитель</div>
                      <div className="header_hight__text__low">Garmin, Polar, Suunto</div>
                  </div>
                  <div className="header_hight__links">
                      <div className="header_hight__links__number">+7 (499) 922-89-74</div>
                      <button data-modal="consultation" className="button" aria-label="button">заказать звонок</button>
                  </div>
              </div>
              <div className="header_middle ">
                  <h1>Подбор пульсометра</h1>
                  <h2 className="header_middle_hight_text">с учётом Вашего уровня подготовки</h2>
                  <div className="header_middle__wrapper">
                      <div className="item">
                          <img src={img1} alt="timer" className="item_img" />
                          <div className="item_text">Время подбора:<br />10 минут</div>
                      </div>
                      <div className="item">
                          <img src={img2} alt="cart" className="item_img" />
                          <div className="item_text">Бесплатная<br />доставка</div>
                      </div>
                      <div className="item">
                          <img src={img3} alt="messages" className="item_img" />
                          <div className="item_text">Ответим<br />на все вопросы</div>
                      </div>
                  </div>
                  <div className="head_block ">
                      <button data-modal="consultation" className="button button_main" aria-label="Заказать консультацию" onClick={openModal}>Заказать кОНСУЛЬТАЦИЮ</button>
                      <div className="header_middle__link">или <a href="" aria-label="Перейти к товарам">ПЕРЕЙТИ В КАТАЛОГ</a></div>
                  </div>
              </div>
          </div>
      </div><Modal isOpen={isOpen} onClose={closeModal} /></>
  );
  
};


