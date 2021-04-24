import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./Toolbar.css";

export default function Toolbar(props) {
  return (
    <header className="Toolbar">
      <div>MENU</div>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
}
