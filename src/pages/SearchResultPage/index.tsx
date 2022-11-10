import Filters from "../../components/Filters";
import SearchBar from "../../components/SearchBar";
import SearchResult from "../../components/SearchResult";
import { useResultCtx } from "../../context/ResultContext";
import styles from "./SearchResultPage.module.scss";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const paramKey = "value";
const SearchResultPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const resultCtx = useResultCtx();
  const searchValue = searchParams.get(paramKey);

  useEffect(() => {
    if (searchValue === "" || !searchValue) return;
    resultCtx?.search(searchValue);
  }, []);

  const onSubmit = (searchValue: string) => {
    resultCtx?.search(searchValue);
  };

  return (
    <div className={styles.searchResult}>
      <nav>
        <SearchBar
          alt={true}
          initialValue={searchValue || ""}
          onSubmit={onSubmit}
        />
      </nav>
      <main>
        <h1>Search Results</h1>
        <section>
          <Filters />
          <SearchResult />
        </section>
      </main>
    </div>
  );
};

export default SearchResultPage;
