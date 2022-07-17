import React, { Component } from "react";
import { Badge, Navbar, NavbarBrand, Button } from "reactstrap";
import Menu from "./components/StaffListComponent";
import "./App.css";

import { STAFFS } from "./shered/staffs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: STAFFS,
    };
  }

  render() {
    return (
      <div className="App ">
        <Navbar dark color="primary">
          <NavbarBrand>
            <div className="container">Ứng dụng quản lý nhân sự v1.0</div>
          </NavbarBrand>
        </Navbar>

        <Menu dark color="primary" dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
