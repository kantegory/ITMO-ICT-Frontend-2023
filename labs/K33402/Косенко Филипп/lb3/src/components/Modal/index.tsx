import './Modal.sass';
import '../RequestForm/RequestForm.sass'
import { useState } from "react";
import axios from "axios";
// interface Props {
//     isOpen?: ReactNode;
//     onClose?: ReactNode;
//     // any props that come into the component
// }



function Modal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    if (!isOpen) {
        return null;
    }
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
        <div className="overlay">
            <div className="modal" id="consultation">
            <div className="modal__exit"  onClick={onClose}>&times;</div>
            <div className="modal__title">Просто заполните форму заявки</div>
            <div className="modal__descr">и мы перезвоним вам в течении 10 минут</div>
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
}
  export default Modal;
  
 