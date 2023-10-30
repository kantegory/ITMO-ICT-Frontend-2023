import { useState, useEffect } from "react";
import axios from "axios";

import { Header } from "../../components/index";
import style from "./Main.module.sass";
import { Item } from "../../components/index";

type ItemData = {
  id: number;
  title: string;
  img: string;
  price: number;
  brand: string;
  gender: string;
};

export type CartItem = {
  title: string;
  price: number;
  img: string;
};

export const Main = () => {
  const [selectedGender, setSelectedGender] = useState<string>("all");
  const [data, setData] = useState<ItemData[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/clothes")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching data", error);
      });
  }, []);

  const addToCart = (item: ItemData) => {
    axios
      .post("http://localhost:3000/cart", item)
      .then(() => {
        alert("Item is added to cart");

        setCartItems((prevItems) => [
          ...prevItems,
          {
            title: item.title,
            price: item.price,
            img: item.img,
          },
        ]);
      })
      .catch((error) => {
        console.error("There was an error adding the item to the cart!", error);
      });
  };

  useEffect(() => {
    let url = "http://localhost:3000/clothes";

    const params = new URLSearchParams();

    if (selectedGender !== "all") {
      params.append("gender", selectedGender);
    }

    if (searchQuery.trim() !== "") {
      params.append("q", searchQuery.trim());
    }

    if (params.toString()) {
      url += `?${params.toString()}`;
    }

    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching data", error);
      });
  }, [selectedGender, searchQuery]);

  return (
    <div className={style.wrapper}>
      <Header
        setSelectedGender={setSelectedGender}
        cartItems={cartItems}
        onSearch={setSearchQuery}
      />
      <div className={style.feed}>
        <p className={style.title}>Items</p>
        <div className={style.itemSelection}>
          {data.map((item: ItemData) => {
            const props = {
              id: item.id,
              title: item.title,
              img: item.img,
              price: item.price,
              brand: item.brand,
              addToCart: () => addToCart(item),
            };
            return <Item {...props} />;
          })}
        </div>
      </div>
    </div>
  );
};
