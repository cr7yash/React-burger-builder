import React from "react";
import Aux from "../../hoc/Aux";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../UI/SideDrawer/SideDrawer";
import "./Layout.css";

class Layout extends React.Component {
  state = {
    showSideDrawer: true
  };

  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className="Content">{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
