import style from "./SignInPage.module.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleSignIn = () => {
    axios
      .get("http://localhost:3000/users", {
        params: { email: email },
      })
      .then((response) => {
        if (response.data.length > 0) {
          alert("This email is already registered.");
          return;
        }
        axios
          .post("http://localhost:3000/users", {
            email: email,
            password,
          })
          .then(() => {
            alert("Registration successful!");
            nav("main");
          })
          .catch((error) => {
            console.error("Registration error:", error);
          });
      })
      .catch((error) => {
        console.error("Error checking registration:", error);
      });
  };

  const handleLogIn = () => {
    axios
      .get("http://localhost:3000/users", {
        params: { email: email, password },
      })
      .then((response) => {
        if (response.data.length === 0) {
          alert("Incorrect email or password.");
          return;
        }
        alert("Login successful!");
        nav("main");
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.container}>
        <div className={style.inputs}>
          <div className={style.inputOption}>
            <h2 className={style.optionText}>Username</h2>
            <input
              type="email" // Используем тип email для валидации
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={style.customInput}
            />
          </div>
          <div className={style.inputOption}>
            <h2 className={style.optionText}>Password</h2>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={style.customInput}
            />
          </div>
        </div>
        <div className={style.buttons}>
          <button onClick={handleSignIn} className={style.signButton}>
            Sign In
          </button>
          <button onClick={handleLogIn} className={style.signButton}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};
