import React, { ChangeEventHandler, useState } from "react";
import SearchIcon from "../../assets/SearchIcon";
import styles from "./SearchBar.module.scss";

interface ISearchBar {
  onFocus?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: ChangeEventHandler<HTMLInputElement>;
  alt?: boolean;
}

const altStyles = {
  border: "1px solid grey",
  height: 50,
};

const SearchBar = ({ onFocus, onBlur, alt }: ISearchBar) => {
  const [value, setValue] = useState<string>("");

  const handleSubmit: React.ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (value === "") return;
  };

  return (
    <div className={styles.searchBar} style={alt ? altStyles : {}}>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          onFocus={onFocus}
          onBlur={onBlur}
          type="text"
          placeholder="Search"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={styles.searchButton}>
          <SearchIcon size={alt ? 24 : 32} />
        </button>
      </form>
    </div>
  );
};

SearchBar.defaultProps = {
  onFocus: () => {},
  onBlur: () => {},
  alt: false,
};

export default SearchBar;
