import style from "./Header.module.scss";
import { useEffect, useState } from "react";

type HeaderProps = {
  searchPost: React.Dispatch<React.SetStateAction<string>>;
};

export const Header = ({ searchPost }: HeaderProps) => {
  const [theme, setTheme] = useState<string>("light");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchPost(event.target.value);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <nav className={style.container}>
      <h1>Blog App</h1>
      <input placeholder="Search post..." onChange={handleSearch} />
      <p onClick={toggleTheme}>Theme Toggle</p>
    </nav>
  );
};
