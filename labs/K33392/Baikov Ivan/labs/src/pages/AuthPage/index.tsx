import style from "./AuthPage.module.scss";
import { useState } from "react";
import ky from "ky";
import { useNavigate } from "react-router-dom";

type User = {
  email: string;
  password: string;
};

export const AuthPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const nav = useNavigate();

  const handleSignIn = async () => {
    try {
      const response: User[] = await ky
        .get("http://localhost:3000/users", {
          searchParams: { email: email },
        })
        .json();

      if (response.length > 0) {
        alert("This email is already registered.");
        return;
      }

      await ky.post("http://localhost:3000/users", {
        json: { email: email, password },
      });

      alert("Registration successful!");
      nav("main");
    } catch (error) {
      console.error("Error during the registration process:", error);
    }
  };

  const handleLogIn = async () => {
    try {
      const response: User[] = await ky
        .get("http://localhost:3000/users", {
          searchParams: { email: email, password },
        })
        .json();

      if (response.length === 0) {
        alert("Incorrect email or password.");
        return;
      }

      alert("Login successful!");
      nav("main");
    } catch (error) {
      console.error("Error during the login process:", error);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.inputs}>
        <div className={style.inputOption}>
          <h2>Username</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={style.inputOption}>
          <h2>Password</h2>
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
