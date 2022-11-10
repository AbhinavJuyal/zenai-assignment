import SearchPage from "./pages/SearchPage";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./App.scss";

import logo from "./assets/logo.png";
import SearchResultPage from "./pages/SearchResultPage";
import { ResultProvider } from "./context/ResultContext";

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
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
