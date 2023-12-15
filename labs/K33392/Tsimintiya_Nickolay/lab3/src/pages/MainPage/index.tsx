import { Header } from "../../components/Header";
import style from "./MainPage.module.css";
import mainPic from "../../assets/home-bg.jpg";
import { Post } from "../../components/Post";
import axios from "axios";
import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";

export type PostData = {
  id: number;
  title: string;
  text: string;
  imageURL: string;
};

export const MainPage = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [searchPost, setSearchPost] = useState<string>("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching data", error);
      });
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchPost.toLowerCase())
  );

  return (
    <div className={style.container}>
      <div>
        <Header setSearchTerm={setSearchPost} />
        <div className={style.imageContainer}>
          <img src={mainPic} />
          <div className={style.imageText}>Hello, traveller!</div>
        </div>
      </div>
      <div className={style.postSelection}>
        {filteredPosts.map((post: PostData) => {
          const props = {
            id: post.id,
            title: post.title,
            text: post.text,
            imageURL: post.imageURL,
          };
          return <Post {...props} />;
        })}
      </div>
      <Footer />
    </div>
  );
};
