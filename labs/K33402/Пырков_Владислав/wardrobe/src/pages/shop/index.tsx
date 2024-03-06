import { useEffect, useState } from "react";
import { Page, Select, ItemCard } from "../../components";
import cl from "./styles.module.sass";
import axios from "axios";

type ShopPageProps = {
    theme: string;
};

const ShopPage = ({ theme }: ShopPageProps) => {
    const [goods, setGoods] = useState([]);
    const [category, setCategory] = useState("");
    const [sum, setSum] = useState(0);

    useEffect(() => {
        axios
            .get("https://api.escuelajs.co/api/v1/products")
            .then((response: any) => {
                const data = response.data;
                if (category === "") {
                    setGoods(data);
                    return;
                }
                setGoods(
                    data.filter((good: any) => good.category.name === category),
                );
            })
            .catch((error) => {
                console.error("There was an error fetching data", error);
            });
    }, [category]);

    return (
        <Page theme={theme}>
            <header className={cl.top}>
                <Select onChange={(event) => setCategory(event.target.value)}>
                    <option value="A new name">Новое</option>
                    <option value="Shoes">Обувь</option>
                    <option value="Miscellaneous">Разное</option>
                    <option value="Clothes">Одежда</option>
                </Select>
            </header>
            <article className={cl.gallery}>
                {goods.map((good: any, index: number) => (
                    <ItemCard
                        key={index}
                        title={good.title}
                        price={good.price}
                        image={good.images[0]}
                        addCallback={() => setSum((prev) => prev + good.price)}
                    />
                ))}
            </article>
            <div className={cl.container}>
                <button>Купить {sum > 0 && `${sum}$`}</button>
            </div>
        </Page>
    );
};

export default ShopPage;
