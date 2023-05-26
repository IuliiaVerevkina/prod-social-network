import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { useTheme } from "./theme/useTheme";
import { ClassNames } from "./helpers/classNames/classNames";

function App() {
      const { theme, toggleTheme } = useTheme();
      return (
            <div className={ClassNames("app", {}, [theme])}>
                  ,<button onClick={toggleTheme}>Toggle</button>
                  <Link to={"/"}>Home</Link>
                  <Link to={"/bout"}>About</Link>
                  <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                              <Route path="/" element={<MainPageAsync />} />
                              <Route
                                    path="/bout"
                                    element={<AboutPageAsync />}
                              />
                        </Routes>
                  </Suspense>
            </div>
      );
}

export default App;
