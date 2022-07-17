import React, { Component } from "react";
import { Badge, Navbar, NavbarBrand, Button } from "reactstrap";
import Menu from "./components/MenuComponents";
import "./App.css";
import { DISHES } from "./shered/dishes";
import { STAFFS } from "./shered/staffs";
import { COLUM } from "./shered/dishes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: STAFFS,
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>

        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
