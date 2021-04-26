import React from "react";
import Aux from "../../hoc/Aux";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../UI/SideDrawer/SideDrawer";
import "./Layout.css";

const Layout = (props) => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className="Content">{props.children}</main>
  </Aux>
);

export default Layout;
