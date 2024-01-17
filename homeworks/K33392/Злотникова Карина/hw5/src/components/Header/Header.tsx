import "../../index.scss";

type HeaderProps = {
  onSearch: (query: string) => void;
};

export const Header = ({ onSearch }: HeaderProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <header className="headerWrapper">
      <div className="logoAndTitle">
        <svg className="iconlogo">
          <use xlinkHref="/src/sprite.svg#logo"></use>
        </svg>
        <h1>Калорийк</h1>
      </div>
      <input
        className="input"
        placeholder="Найти продукт..."
        onChange={handleSearch}
      />
    </header>
  );
};
