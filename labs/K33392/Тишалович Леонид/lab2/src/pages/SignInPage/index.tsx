import { useState } from "react";
import axios from "axios";
import style from "./SignInPage.module.sass";
import { useNavigate } from "react-router-dom";

export const SignInPage = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    const isEmail = /\S+@\S+\.\S+/.test(emailOrUsername);
    if (!isEmail) {
      alert("Please enter a valid email address for registration.");
      return;
    }

    axios
      .get("http://localhost:3000/users", {
        params: { email: emailOrUsername },
      })
      .then((response) => {
        if (response.data.length > 0) {
          alert("This email is already registered.");
          return;
        }
        axios
          .post("http://localhost:3000/users", {
            email: emailOrUsername,
            password,
          })
          .then(() => {
            alert("Registration successful!");
            navigate("/main");
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
        params: { email: emailOrUsername, password },
      })
      .then((response) => {
        if (response.data.length === 0) {
          alert("Incorrect email or password.");
          return;
        }
        alert("Login successful!");
        navigate("/main");
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  return (
    <div className={style.wrapper}>
      <h1>Sign In Page</h1>
      <div className={style.inputs}>
        <div className={style.inputText}>
          <p>User name or email address</p>
          <input
            value={emailOrUsername}
            onChange={(e) => setEmailOrUsername(e.target.value)}
          />
        </div>
        <div className={style.inputText}>
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className={style.buttons}>
        <button onClick={handleSignIn}>Sign In</button>
        <button onClick={handleLogIn}>Log In</button>
      </div>
    </div>
  );
};
