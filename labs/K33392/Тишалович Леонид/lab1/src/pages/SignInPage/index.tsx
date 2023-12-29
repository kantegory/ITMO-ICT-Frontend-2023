import style from "./SignInPage.module.sass";
import { Link } from "react-router-dom";

export const SignInPage = () => {
  return (
    <div className={style.wrapper}>
      <h1>Sign In Page</h1>
      <div className={style.inputs}>
        <div className={style.inputText}>
          <p>User name or email address</p>
          <input />
        </div>
        <div className={style.inputText}>
          <p>Password</p>
          <input />
        </div>
      </div>
      <Link to="main">
        <button>Sign In</button>
      </Link>
    </div>
  );
};
