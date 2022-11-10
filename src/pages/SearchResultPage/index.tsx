import Filters from "../../components/Filters";
import SearchBar from "../../components/SearchBar";
import SearchResult from "../../components/SearchResult";
import { ResultProvider } from "../../context/FilterContext";
import styles from "./SearchResultPage.module.scss";

const SearchResultPage = () => {
  return (
    <ResultProvider>
      <div className={styles.searchResult}>
        <nav>
          <SearchBar alt={true} />
        </nav>
        <main>
          <h1>Search Results</h1>
          <section>
            <Filters />
            <SearchResult />
          </section>
        </main>
      </div>
    </ResultProvider>
  );
};

export default SearchResultPage;
