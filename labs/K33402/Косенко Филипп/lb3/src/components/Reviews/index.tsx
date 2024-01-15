import "./Reviews.sass";
import ph1 from "./photo_1.png";
import ph2 from "./photo_2.png";
import ph3 from "./photo_3.png"

export const Reviews = () => {
    return (
        <section className="reviews">
        <div className="cont">
            <h2 className="title title__reviews">отзывы клиентов</h2>
            <div className="reviews-item">
                <img src={ph1} alt="photo" className="reviews-item__img"/>
                <div className="reviews-item__text">
                    <div className="reviews-item__name">Ирина Иванченко </div>
                    <div className="reviews-item__col">2 полумарафона</div>
                    <div className="reviews-item__rew-src">Не знала, что себе купить - обратилась к ребятам из RunSmart - подобрали пульсометр, который подошёл именно под мои цели и финансовые возможности.Через некоторое время решила обновить гаджет - не раздумывая обратилась туда же.Новые цели - новый гаджет!
                        <br/>
                        Спасибо, RunSmart! </div>
                </div>
            </div>
            <div className="reviews-item">
                <img src={ph2} alt="photo" className="reviews-item__img"/>
                <div className="reviews-item__text">
                    <div className="reviews-item__name">Иван Сёмочкин</div>
                    <div className="reviews-item__col">1 полумарафон</div>
                    <div className="reviews-item__rew-src">Крутая штука-пульсометр. Обычно без них бегал. Оказывается только хуже себе делал. <br/>Купил пульсометр, ещё в подарок получил тренировку. Со мной вместе провели первую тренировку, научили пользоваться новым гаджетом. Также объяснили основы анатомии, составили план тренировок на месяц вперёд. <br/>С ними подготовился к своему первому полумарафону! Спасибо!!!</div>
                </div>
            </div>
            <div className="reviews-item">
                <img src={ph3} alt="photo" className="reviews-item__img"/>
                <div className="reviews-item__text">
                    <div className="reviews-item__name">Юлия Дашкина</div>
                    <div className="reviews-item__col">2 полумарафона</div>
                    <div className="reviews-item__rew-src">Долго не могла начать бегать, т.к. до этого несколько раз начинала, но становилось тяжело и я бросала. От друзей услышала о RunSmart и о беге с контролем пульса и решила попробовать. <br/>Позвонила, ребята поинтересовались моими целями и подобрали очень интересный вариант со скидкой! Теперь бегаю и наслаждаюсь бегом! Пробежала уже 2 полумарафона и несколько более коротких забегов и не намерена останавливаться! <br/>!!!</div>
                </div>
            </div>
        </div>
    </section>
    );
};