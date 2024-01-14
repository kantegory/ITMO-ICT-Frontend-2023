import "./Advantages.sass";
import "../SASS/button.sass";
import cup from "./cup-_1_.svg";
import heart from "./heart-_1_.svg";
import shoe from "./shoe-_1_.svg";


export const Advantages = () => {
    return (
    
        <section className="advantages">
        <div className="cont">
            <h2 className="title">НАШИ ПРЕИМУЩЕСТВА</h2>
            <div className="advantages__wrapper">
                <div className="advantages__wrapper__item">
                    <img src={cup} alt="heart" className="advantages_img"/> 
                    <div className="advantages_title_i">Делимся опытом</div>
                    <div className="advantages_text">Наши сотрудники всегда готовы<br/> поделиться своим опытом,<br/> так как сами бегают полумарафоны, переплыли Босфор, готовятся к соревнованиям по триатлону!</div>
                </div>
                <div className="advantages__wrapper__item">
                    <img src={heart} alt="heart" className="advantages_img"/>
                    <div className="advantages_title_i">Заботимся о здоровье</div>
                    <div className="advantages_text">Мы работаем для того, чтобы Ваши занятия спортом шли на пользу Вашему здоровью и были в радость Вам и Вашим близким!</div>
                </div>
                <div className="advantages__wrapper__item">
                    <img src={shoe} alt="heart" className="advantages_img"/>
                    <div className="advantages_title_i">Учим бегать</div>
                    <div className="advantages_text">Помогаем с обучением правильной технике бега! Дружим с крупнейшей школой бега в России - I LOVE RUNNING.</div>
                </div>
            </div>
        </div>
    </section>

    );
};
