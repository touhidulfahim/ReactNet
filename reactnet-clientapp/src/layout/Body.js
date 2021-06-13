import React from "react";
import FoodItem from "../components/Foods/FoodItem";
import CustomerList from "../components/Customers/CustomerList";
import Order from "../components/Orders/Index";

import { Route, Redirect, Switch } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <Switch>
        <Route path="/customer" exact component={CustomerList} />
        <Route path="/food" exact component={FoodItem} />
        <Route path="/order" exact component={Order} />
        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  );
};

export default Body;
