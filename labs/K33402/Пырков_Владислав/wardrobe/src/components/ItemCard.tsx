import cl from "./styles.module.sass";

type ItemCardProps = {
    title: string;
    price: number;
    image: string;
    addCallback: () => void;
};

const ItemCard = ({ title, price, image, addCallback }: ItemCardProps) => {
    const formattedImage = image
        .replace("[", "")
        .replace("]", "")
        .replace('"', "")
        .replace('"', "")
        .replace("&quot;", "");
    return (
        <div className={cl.card}>
            <img src={formattedImage} alt="Товар" />
            <div>
                <h1>{title}</h1>
                <span>{price}$</span>
            </div>
            <button onClick={addCallback}>В корзину</button>
        </div>
    );
};

export default ItemCard;
