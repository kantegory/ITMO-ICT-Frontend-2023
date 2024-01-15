import "./RequestForm.sass";
import "../SASS/button.sass"
import "../SASS/title.sass"
import { useState } from "react";
import axios from "axios";

export const RequestForm = () => {
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3000/requests", {
        name,
        phoneNumber,
        email,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="request-container">
      <div className="cont">
      <h2 className="title title__left">Получите бесплатную консультацию<br/>по подбору пульсометра </h2>
      <div className="consultation__descr">Просто заполните форму заявки <br/>и мы перезвоним вам в течении 10 минут</div>
      <form id="section-form"action="#" className="feed-form">
        <input
          type="text"
          placeholder="Введите имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="request-input"
        />
        <input
          type="text"
          placeholder="Введите номер телефона"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="request-input"
        />
        <input
          type="text"
          placeholder="Введите Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="request-input"
        />
      </form>
      <button className="button button_submit" onClick={handleSubmit}>
        Заказать консультацию
      </button>
      </div>
    </div>
  );
};
