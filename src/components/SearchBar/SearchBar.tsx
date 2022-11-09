import React, { useRef, useState } from "react";
import SearchIcon from "../../assets/SearchIcon";
import SuggestionBox from "../SuggestionBox/SuggestionBox";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  //   const handleIconClick = () => {
  //     if (!inputRef.current) return;
  //     alert("");
  //     if (value === "") inputRef.current.focus();
  //   };

  const handleSubmit: React.ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (value === "") return;
  };

  return (
    <div className={styles.searchBar}>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          type="text"
          placeholder="Search"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={styles.searchButton}>
          <SearchIcon size={32} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
