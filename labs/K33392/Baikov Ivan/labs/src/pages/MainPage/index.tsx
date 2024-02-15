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
        const response: PostData[] = await ky.get("http://localhost:3000/posts").json();
        setPosts(response);
      } catch (error) {
        console.error("There was an error fetching data", error);
      }
    };

    fetchPosts();
  }, []);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortMethod(e.target.value);
  };

  const sortedPosts = posts
    .filter((post) => post.title.toLowerCase().includes(searchPost.toLowerCase()))
    .sort((a, b) => {
      if (sortMethod === "Sort by date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (sortMethod === "Sort by name") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

  return (
    <div className={style.container}>
      <Header searchPost={setSearchPost} />
      <Link to="/create_post">
        <button>Create Post</button>
      </Link>
      <select onChange={handleSortChange}>
        <option value="">Select sorting method</option>
        <option value="Sort by date">Sort by date</option>
        <option value="Sort by name">Sort by name</option>
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
          return <Post key={post.id} {...props} />;
        })}
      </div>
    </div>
  );
};
