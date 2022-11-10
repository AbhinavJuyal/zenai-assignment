import React, { ChangeEventHandler, FormEvent, useState } from "react";
import SearchIcon from "../../assets/SearchIcon";
import styles from "./SearchBar.module.scss";

interface ISearchBar {
  initialValue: string;
  onSubmit: (searchValue: string) => void;
  onFocus?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: ChangeEventHandler<HTMLInputElement>;
  alt?: boolean;
}

const altStyles = {
  border: "1px solid grey",
  height: 50,
};

const SearchBar = ({
  onFocus,
  onBlur,
  onSubmit,
  alt,
  initialValue,
}: ISearchBar) => {
  const [value, setValue] = useState<string>(initialValue);

  const handleSubmit: React.ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (value === "") return;
    onSubmit(value);
  };

  return (
    <div className={styles.searchBar} style={alt ? altStyles : {}}>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          type="text"
          placeholder="Search"
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
  onSubmit: () => {},
  alt: false,
  initialValue: "",
};

export default SearchBar;
