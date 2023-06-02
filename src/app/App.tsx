import { useTheme } from "./provider/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { NavBar } from "widgets/navBar";
import { AppRouter } from "./provider/router";
import "./style/index.scss";
import { Sidebar } from "widgets/sidebar";
import { Suspense } from "react";

function App() {
      const { theme } = useTheme();
      return (
            <div className={classNames("app", {}, [theme])}>
                  <Suspense fallback="loading">
                        <NavBar />
                        <div className="app-page">
                              <Sidebar />
                              <AppRouter />
                        </div>
                  </Suspense>
            </div>
      );
}

export default App;
