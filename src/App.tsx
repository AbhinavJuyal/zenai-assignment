import SearchPage from "./pages/SearchPage";
import "./App.scss";

import logo from "./assets/logo.png";

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <SearchPage />
    </div>
  );
}

export default App;
