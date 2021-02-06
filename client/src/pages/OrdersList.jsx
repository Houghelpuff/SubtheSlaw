import React, { Component } from "react";
import apis from "../api";

class OrdersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      isLoading: false,
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });

    await apis.getAllOrders().then((orders) => {
      this.setState({
        orders: orders.data.data,
        isLoading: false,
      });
    });
  };

  render() {
    const { orders } = this.state;
    console.log("TCL: OrdersList -> render -> orders", orders);

    return (
      <div className="w-full px-10 py-10">
        {orders.map((order) => (
          <h1 className="text-3xl">{order.name}</h1>
        ))}
        <h1 className="text-3xl">i i carl</h1>
      </div>
    );
  }
}

function red(re) {
  if (re) {
    return "yes";
  }
}

var one = 1;

red(one);

export default OrdersList;
