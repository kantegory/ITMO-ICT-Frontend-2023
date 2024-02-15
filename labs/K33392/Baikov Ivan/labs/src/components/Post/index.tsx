import style from "./Post.module.scss";
import { PostData } from "../../pages/MainPage";

export const Post = ({ cover, title, description, date }: PostData) => {
  return (
    <div className={style.container}>
      <img src={cover} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Published: {date}</p>
    </div>
  );
};
