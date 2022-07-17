import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import dateFormat, { masks } from "dateformat";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
      columDefault: "col-12 col-md-5 m-1",
    };
  }
  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }
  onDishSelectcolum(dish) {
    this.setState({ columDefault: dish });
  }
  renderDish(dish) {
    if (dish != null) {
      return (
        <Card dark color="success">
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardText>
              <h3>Họ và tên:{dish.name}</h3>
            </CardText>
            <CardText>Ngày sinh: {dateFormat(dish.doB, "dd/mm/yyyy")}</CardText>
            <CardText>
              Ngày vào công ty: {dateFormat(dish.startDate, "dd/mm/yyyy")}
            </CardText>
            <CardText>Phòng ban: {dish.department.name}</CardText>
            <CardText>Số ngày nghĩ còn lại: {dish.annualLeave}</CardText>
            <CardText>Số ngày làm thêm: {dish.overTime}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className={this.state.columDefault}>
          <Card dark color="secondary" onClick={() => this.onDishSelect(dish)}>
            <CardTitle>{dish.name}</CardTitle>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <Button
          dark
          color="danger"
          onClick={() => this.onDishSelectcolum("col-12 col-md-12 mt-1")}
          className="col-12 col-md-1 m-1"
        >
          1 Cột
        </Button>
        <Button
          dark
          color="info"
          onClick={() => this.onDishSelectcolum("col-12 col-md-6 mt-1")}
          className="col-12 col-md-1 m-1"
        >
          2 Cột
        </Button>
        <Button
          dark
          color="warning"
          onClick={() => this.onDishSelectcolum("col-12 col-md-4 mt-1")}
          className="col-12 col-md-1 m-1"
        >
          3 Cột
        </Button>
        <Button
          dark
          color="dark"
          onClick={() => this.onDishSelectcolum("col-12 col-md-2 mt-1")}
          className="col-12 col-md-1 m-1"
        >
          6 Cột
        </Button>

        <div className="row ">{menu}</div>
        <div className="row">{this.renderDish(this.state.selectedDish)}</div>
      </div>
    );
  }
}
export default Menu;
