import React from "react";
import { Switch, Route } from "react-router-dom";
import { OrdersList, OrdersInsert, OrdersUpdate } from "../pages";

export default function SwitchWrapper() {
  return (
    <div className="inset-2/4">
      <Switch>
        <Route path="/orders/list" exact component={OrdersList} />
        <Route path="/orders/create" exact component={OrdersInsert} />
        <Route path="/orders/update/:id" exact component={OrdersUpdate} />
      </Switch>
    </div>
  );
}
