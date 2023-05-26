import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";

import { useTheme } from "./provider/ThemeProvider";
import { ClassNames } from "shared/lib/classNames/classNames";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

import "./style/index.scss";



function App() {
      const { theme, toggleTheme } = useTheme();
      return (
            <div className={ClassNames("app", {}, [theme])}>
                  ,<button onClick={toggleTheme}>Toggle</button>
                  <Link to={"/"}>Home</Link>
                  <Link to={"/bout"}>About</Link>
                  <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                              <Route path="/" element={<MainPage />} />
                              <Route
                                    path="/bout"
                                    element={<AboutPage />}
                              />
                        </Routes>
                  </Suspense>
            </div>
      );
}

export default App;
