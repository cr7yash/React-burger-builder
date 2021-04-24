import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import "./NavigationItems.css";

export default function NavigationItems(props) {
  return (
    <ul className="NavigationItems">
      <NavigationItem link="/" active>
        Burger Builder{" "}
      </NavigationItem>
      <NavigationItem link="/checkout">Checkout </NavigationItem>
    </ul>
  );
}
