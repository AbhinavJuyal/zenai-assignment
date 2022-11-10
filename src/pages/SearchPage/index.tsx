import { ChangeEventHandler, useState } from "react";
import SearchBar from "../../components/SearchBar";
import SuggestionBox from "../../components/SuggestionBox";
import styles from "./SearchPage.module.scss";

const SearchPage = () => {
  const [show, setShow] = useState<boolean>(false);

  const onSearchBarFocus: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.stopPropagation();
    setShow(true);
  };

  const onSearchBarBlur: ChangeEventHandler<HTMLInputElement> = (e) => {
    setShow(false);
  };

  return (
    <div className={styles.searchPage}>
      <div className={styles.container}>
        <SearchBar onFocus={onSearchBarFocus} onBlur={onSearchBarBlur} />
        {show && <SuggestionBox />}
      </div>
    </div>
  );
};

export default SearchPage;
