import { Post } from "../../components/Post";
import style from "./MainPage.module.scss";
import { Header } from "../../components/Header";
import { useState, useEffect } from "react";
import ky from "ky";
import { Link } from "react-router-dom";

export type PostData = {
  id: number;
  cover: string;
  title: string;
  description: string;
  date: string;
};

export const MainPage = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [searchPost, setSearchPost] = useState<string>("");
  const [sortMethod, setSortMethod] = useState<string>("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let url = "http://localhost:3123/posts";

        if (sortMethod) {
          url += `?sort=${sortMethod.toLowerCase()}`;
          console.log("url", url);
        }

        const response: PostData[] = await ky.get(url).json();
        setPosts(response);
        console.log("got");
      } catch (error) {
        console.error("There was an error fetching data", error);
      }
    };

    fetchPosts();
  }, [sortMethod]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortMethod(e.target.value);
    console.log("handle");
  };

  const sortedPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchPost.toLowerCase())
  );
  return (
    <div className={style.container}>
      <Header searchPost={setSearchPost} />
      <Link to="/create_post">
        <button>Create Post</button>
      </Link>
      <select onChange={handleSortChange}>
        <option value="">Select sorting method</option>
        <option value="sort_by_date">Sort by date</option>
        <option value="sort_by_name">Sort by name</option>
      </select>
      <div className={style.content}>
        {sortedPosts.map((post: PostData) => {
          const props = {
            id: post.id,
            cover: post.cover,
            title: post.title,
            description: post.description,
            date: post.date,
          };
          return (
            <Link to={`/posts/${post.id}`} key={post.id} style={{ textDecoration: "none" }}>
              <Post key={post.id} {...props} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
