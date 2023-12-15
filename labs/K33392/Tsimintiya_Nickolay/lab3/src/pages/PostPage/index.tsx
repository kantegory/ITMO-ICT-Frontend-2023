import { useState, useEffect } from "react";
import { PostData } from "../MainPage";
import axios from "axios";
import { Post } from "../../components/Post";

export const PostPage = () => {
  const [post, setPost] = useState<PostData>();

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts/1")
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching data", error);
      });
  }, []);

  return (
    <div>
      {post ? (
        <Post title={post.title} text={post.text} imageURL={post.imageURL} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
