import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignUpPage.sass";

export const SignUpPage = () => {
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
    <div className="container">
      <div className="inputs">
        <div className="input-option">
          <h2 className="option-text">Email</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="custom-input"
          />
        </div>
        <div className="input-option">
          <h2 className="option-text">Password</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="custom-input"
          />
        </div>
      </div>
      <div className="buttons">
        <button onClick={handleSignIn} className="sign-button">
          Sign In
        </button>
        <button onClick={handleLogIn} className="sign-button">
          Log In
        </button>
      </div>
    </div>
  );
};
