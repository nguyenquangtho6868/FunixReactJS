import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import dateFormat, { masks } from "dateformat";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
  }
  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }
  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardText>
              <h3>Họ và tên:{dish.name}</h3>
            </CardText>
            <CardText>Ngày sinh: {dateFormat(dish.doB, "dd/mm/yyyy")}</CardText>
            <CardText>
              Ngày vào công ty: {dateFormat(dish.startDate, "dd/mm/yyyy")}
            </CardText>
            <CardText>Phòng ban: {dish.department}</CardText>
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
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardTitle>{dish.name}</CardTitle>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">{this.renderDish(this.state.selectedDish)}</div>
      </div>
    );
  }
}
export default Menu;
