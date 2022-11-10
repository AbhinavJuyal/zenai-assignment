import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import SearchBar from "../../components/SearchBar";
import SuggestionBox from "../../components/SuggestionBox";
import styles from "./SearchPage.module.scss";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const [show, setShow] = useState<boolean>(false);
  const navigate = useNavigate();

  const onSearchBarFocus: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.stopPropagation();
    setShow(true);
  };

  // const onSearchBarBlur: ChangeEventHandler<HTMLInputElement> = (e) => {
  //   setShow(false);
  // };

  const onFormSubmit = (searchValue: string) => {
    navigate(`/search?value=${searchValue}`);
  };

  const removeBox = () => {
    setShow(false);
  };

  return (
    <div className={styles.searchPage}>
      <div className={styles.container}>
        <SearchBar
          onFocus={onSearchBarFocus}
          // onBlur={onSearchBarBlur}
          onSubmit={onFormSubmit}
        />
        {show && <SuggestionBox removeBox={removeBox} />}
      </div>
    </div>
  );
};

export default SearchPage;
