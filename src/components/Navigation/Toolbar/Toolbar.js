import React from "react";
import Logo from "../../Logo/Logo";
import DrawerToggle from "../../UI/SideDrawer/DrawerToggle/DrawerToggle";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Toolbar.module.css";

export default function Toolbar(props) {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleclicked} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
}
