import "./UserAuthPage.scss";

export const UserAuthPage = () => {
  return (
    <div className="authPageContainer">
      <div className="authPageInputs">
        <div className="authInput">
          <h2>Почта</h2>
          <input required type="email" />
        </div>
        <div className="authInput">
          <h2>Пароль</h2>
          <input required type="password" />
        </div>
      </div>
      <div className="authPageButtons">
        <button>Зарегистрироваться</button>
        <button>Войти</button>
      </div>
    </div>
  );
};
