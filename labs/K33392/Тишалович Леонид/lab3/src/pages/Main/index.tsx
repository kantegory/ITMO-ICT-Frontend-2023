import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setSearchQuery } from "../../store/slices/seacrhSlice";
import { setSelectedGender } from "../../store/slices/filterSlice";
import { addToCart } from "../../store/slices/cartSlice";
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
  const dispatch = useDispatch();
  const searchQuery = useSelector((state: RootState) => state.search.query);
  const selectedGender = useSelector(
    (state: RootState) => state.filter.selectedGender
  );
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [data, setData] = useState<ItemData[]>([]);

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

  const addToCartDispatch = (item: ItemData) => {
    dispatch(
      addToCart({
        title: item.title,
        price: item.price,
        img: item.img,
      })
    );
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
    <main className={style.wrapper}>
      <Header
        setSelectedGender={(gender: string) =>
          dispatch(setSelectedGender(gender))
        }
        cartItems={cartItems}
        onSearch={(query: string) => dispatch(setSearchQuery(query))}
      />
      <section className={style.feed}>
        <p className={style.title}>Items</p>
        <div className={style.itemSelection}>
          {data.map((item: ItemData) => {
            const props = {
              id: item.id,
              title: item.title,
              img: item.img,
              price: item.price,
              brand: item.brand,
              addToCart: () => addToCartDispatch(item),
            };
            return <Item {...props} />;
          })}
        </div>
      </section>
    </main>
  );
};
