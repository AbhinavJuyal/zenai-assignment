import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { ResultProvider } from "./context/ResultContext";
import { GlobalProvider } from "./context/GlobalContext";
import SearchResultPage from "./pages/SearchResultPage";
import SearchPage from "./pages/SearchPage";
import logo from "./assets/logo.png";

import "./App.scss";
import "./styles/global.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage />,
  },
  {
    path: "/search",
    element: (
      <ResultProvider>
        <SearchResultPage />
      </ResultProvider>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <GlobalProvider>
        <RouterProvider router={router} />
      </GlobalProvider>
    </div>
  );
}

export default App;
