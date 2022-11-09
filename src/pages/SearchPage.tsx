import SearchBar from "../components/SearchBar/SearchBar";
import SuggestionBox from "../components/SuggestionBox/SuggestionBox";
import styles from "./SearchPage.module.scss";

const SearchPage = () => {
  return (
    <div className={styles.searchPage}>
      <div className={styles.container}>
        <SearchBar />
        <SuggestionBox />
      </div>
    </div>
  );
};

export default SearchPage;
