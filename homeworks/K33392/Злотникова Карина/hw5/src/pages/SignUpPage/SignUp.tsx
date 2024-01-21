import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../index.scss";
import { v4 as uuidv4 } from "uuid"; // функция для генерации UUID


export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const signInHandle = () => {
    axios
      .get("http://localhost:3000/users", {
        params: { email: email },
      })
      .then((response) => {
        if (response.data.length > 0) {
          alert("Этот емэйл уже зарегистрирован.");
          return;
        }

        const sessionToken = uuidv4();

        axios
          .post("http://localhost:3000/users", {
            email: email,
            password: password,
            sessionToken: sessionToken, // Инициализация сессии
          })
          .then(() => {
            alert("Регистрация прошла успешно!");
            nav("main");
          })
          .catch((error) => {
            console.error("Ошибка регистрации:", error);
          });
      })
      .catch((error) => {
        console.error("Ошибка проверки регистрации:", error);
      });
  };

  const logInHandle = () => {
    axios
      .get("http://localhost:3000/users", {
        params: { email: email, password: password },
      })
      .then((response) => {
        if (response.data.length === 0) {
          alert("Неправильный емэйл или пароль");
          return;
        }

        const user = response.data[0];

        axios
          .put(`http://localhost:3000/users/${user.id}`, user)
          .then(() => {
            alert("Вход прошёл успешно!");
            nav("main");
          })
          .catch((error) => {
            console.error("Ошибка аутентификации:", error);
          });
      })
      .catch((error) => {
        console.error("Ошибка входа:", error);
      });
  };

  return (
    
    <div className="wrapper">
      <header>
        <h1>
          Добро пожаловать в <h1 className="headerTitle">Калорийк</h1>
        </h1>
      </header>

      <main>
        <ul className="options">
          <section className="option">
            <h2>Электронная почта</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />
          </section>
          <section className="option">
            <h2>Пароль</h2>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
          </section>
        </ul>
      </main>

      <footer>
        <section className="buttons">
          <button className="button" onClick={signInHandle}>
            Регистрация
          </button>

          <button className="button" onClick={logInHandle}>
            Вход
          </button>
        </section>
      </footer>
    </div>
  );
};
