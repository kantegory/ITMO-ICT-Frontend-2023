import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import style from "./CreatePostPage.module.scss";

export const CreatePostPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");
  const nav = useNavigate();

  const getCurrentFormattedDateTime = (): string => {
    const currentDateTime = new Date();

    const year = currentDateTime.getFullYear();
    const month = currentDateTime.getMonth() + 1;
    const day = currentDateTime.getDate();
    const hours = currentDateTime.getHours();
    const minutes = currentDateTime.getMinutes();

    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${year}-${formattedDay}-${formattedMonth}, ${formattedHours}:${formattedMinutes}`;
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const handleCoverChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCover(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const date = getCurrentFormattedDateTime();
    axios
      .post("http://localhost:3123/posts", {
        title,
        description,
        date,
        cover,
      })
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
            <label>Title: </label>
            <input type="text" value={title} onChange={handleTitleChange} />
          </div>
          <div>
            <label>Description: </label>
            <textarea value={description} onChange={handleDescriptionChange} />
          </div>
          <div>
            <label>Cover URL: </label>
            <input type="text" value={cover} onChange={handleCoverChange} />
          </div>
          <button type="submit">Create Post</button>
        </div>
      </form>
      <Link to="/main">
        <button>Back</button>
      </Link>
    </div>
  );
};
