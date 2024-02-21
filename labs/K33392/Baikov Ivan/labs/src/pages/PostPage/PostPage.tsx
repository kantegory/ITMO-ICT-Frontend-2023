import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ky from "ky";
import { Link } from "react-router-dom";
import { PostData } from "../MainPage";
import style from "./PostPage.module.scss";
import { Icon } from "../../components/Icon/Icon";

export const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<PostData | null>(null);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response: PostData = await ky.get(`http://localhost:3123/posts/${id}`).json();
        setPost(response);
        console.log("got post");
      } catch (error) {
        console.error("There was an error fetching the post", error);
      }
    };

    fetchPost();
  }, [id]);

  useEffect(() => {
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "[]");
    setIsLiked(likedPosts.includes(id));
  }, [id]);

  const handleLikeClick = () => {
    const newLikedStatus = !isLiked;
    setIsLiked(newLikedStatus);

    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "[]");

    if (newLikedStatus) {
      localStorage.setItem("likedPosts", JSON.stringify([...likedPosts, id]));
    } else {
      localStorage.setItem(
        "likedPosts",
        JSON.stringify(likedPosts.filter((postId: string) => postId !== id))
      );
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style["post-page-container"]}>
      <img src={post.cover} alt={post.title} />
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <p>{post.date}</p>
      <div onClick={handleLikeClick}>
        <Icon id={isLiked ? "Liked" : "Like"} />
      </div>
      <Link to="/main">
        <button>Back</button>
      </Link>
    </div>
  );
};
