import { Link } from "react-router-dom";
import style from "./Header.module.css";

type HeaderProps = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export const Header = ({ setSearchTerm }: HeaderProps) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Gravity Blogs</h1>
      <input
        className={style.inputHeader}
        placeholder="Find post..."
        onChange={handleSearch}
      />
      <div className={style.buttons}>
        <button className={style.headerBtn}>Profile</button>
        <Link to="/create">
          <button className={style.headerBtn}>Create post</button>
        </Link>
      </div>
    </div>
  );
};
