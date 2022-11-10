import Filters from "../../components/Filters";
import SearchBar from "../../components/SearchBar";
import SearchResult from "../../components/SearchResult";
import { useResultCtx } from "../../context/ResultContext";
import styles from "./SearchResultPage.module.scss";
import HamMenu from "../../components/HamMenu";

const SearchResultPage = () => {
  const resultCtx = useResultCtx();

  const onSubmit = (searchValue: string) => {
    resultCtx?.search(searchValue);
  };

  console.log(resultCtx?.searchValue, "search");

  return (
    <div className={styles.searchResult}>
      <nav>
        <SearchBar
          alt={true}
          initialValue={resultCtx?.searchValue || ""}
          onSubmit={onSubmit}
        />
        <div className={styles.hamMenu}>
          <HamMenu />
        </div>
      </nav>
      <main>
        <h1>Search Results</h1>
        <section>
          <div className={styles.mobileHidden}>
            <Filters />
          </div>
          <SearchResult />
        </section>
      </main>
    </div>
  );
};

export default SearchResultPage;
