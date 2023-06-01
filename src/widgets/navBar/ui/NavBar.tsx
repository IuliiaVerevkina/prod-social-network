
import { classNames } from "shared/lib/classNames/classNames";

import cls from "./NavBar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/appLink/AppLink";
import { ThemeSwitcher } from "shared/ui/themeSwitcher";

interface NavBarProps {
      className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
      return (
            <div className={classNames(cls.Navbar)}>
			<ThemeSwitcher/>
                  <div className={cls.links}>
                        <AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>
                              Home
                        </AppLink>
                        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
                              About
                        </AppLink>
                  </div>
            </div>
      );
};