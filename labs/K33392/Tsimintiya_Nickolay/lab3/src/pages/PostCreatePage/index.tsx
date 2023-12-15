import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import style from "./PostCreatePage.module.css";

export const PostCreatePage = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [imageURL, setImageURL] = useState("");
  const nav = useNavigate();

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageURL(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/posts", { title, text, imageURL })
      .then((response) => {
        console.log("Post created:", response.data);
        nav("/main");
      })
      .catch((error) => {
        console.error("Error creating post:", error);
      });
  };

  return (
    <div className={style.container}>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className={style.formContainer}>
          <div>
            <label>Title:</label>
            <input
              className={style.formInput}
              type="text"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div>
            <label>Text:</label>
            <textarea
              className={style.formInput}
              value={text}
              onChange={handleTextChange}
            />
          </div>
          <div>
            <label>Image URL:</label>
            <input
              type="text"
              className={style.formInput}
              value={imageURL}
              onChange={handleImageChange}
            />
          </div>
          <button className={style.formButton} type="submit">
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};
