import SearchPage from "./pages/SearchPage";
import "./App.scss";

import logo from "./assets/logo.png";
import SearchResultPage from "./pages/SearchResultPage";

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      {/* <SearchPage /> */}
      <SearchResultPage />
    </div>
  );
}

export default App;
