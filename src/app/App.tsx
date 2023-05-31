
import { useTheme } from "./provider/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { NavBar } from "widgets/navBar";
import { AppRouter } from "./provider/router";
import "./style/index.scss";



function App() {
      const { theme, toggleTheme } = useTheme();
      return (
            <div className={classNames("app", {}, [theme])}>
                  <NavBar />
                  <AppRouter />
                  <button onClick={toggleTheme}>Toggle</button>
            </div>
      );
}

export default App;
