import style from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.block}>
        <h1>Mystery Inc.</h1>
        <p>Mbiofxh'n bupy wigy byly</p>
      </div>
      <div className={style.block}>
        <h1>Talk to us</h1>
        <p>26°37′45″ с. ш. 70°53′01″ з. д.</p>
        <p>000-010-100</p>
        <p>info@company.com</p>
      </div>
    </div>
  );
};
