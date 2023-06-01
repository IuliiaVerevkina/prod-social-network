
import { useTheme } from "./provider/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { NavBar } from "widgets/navBar";
import { AppRouter } from "./provider/router";
import "./style/index.scss";
import { ThemeSwitcher } from "shared/ui/themeSwitcher";

function App() {
      const { theme } = useTheme();
      return (
            <div className={classNames("app", {}, [theme])}>
                  <NavBar />
                  <AppRouter />
            </div>
      );
}

export default App;
