import React, { useState, useEffect } from "react";
import * as actions from "../../redux/actionCreator/ActionCreator";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import FoodForm from "./FoodForm";
import { useToasts } from "react-toast-notifications";

const mapStateToProps = (state) => ({
  foodList: state.foodReducer.foods,
});

const mapActionToProps = {
  fetchFoods: actions.getFoodList,
  deleteRecord: actions.deleteFood,
};

const FoodItem = ({ classess, ...props }) => {
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    props.fetchFoods();
  }, []);

  const showDetails = (key) => {
    alert("details" + key);
  };

  const { addToast } = useToasts();

  const removeFood = (id) => {
    if (window.confirm("Are you sure to delete this record?"))
      props.deleteRecord(id, () =>
        addToast("Deleted successfully", { appearance: "info" })
      );
  };

  return (
    <div>
      <div className="row col-md-12" style={{ marginTop: "50px" }}>
        <div className="col-md-4">
          <FoodForm {...{ currentId, setCurrentId }} />
        </div>
        <div className="col-md-8">
          <Table className="table table-hover table-border table-sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {props.foodList.map((record, index) => {
                return (
                  <tr key={index}>
                    <td>{record.foodName}</td>
                    <td>{record.price}</td>
                    <td>
                      <a
                        className="btn btn-info btn-sm"
                        onClick={(key) => showDetails(record.sysId)}
                      >
                        <i className="fa fa-info-circle fa-1x"></i>
                      </a>
                      |
                      <a
                        className="btn btn-warning btn-sm"
                        onClick={() => setCurrentId(record.sysId)}
                      >
                        <i className="fa fa-pencil-square-o fa-1x"></i>
                      </a>
                      |
                      <a
                        className="btn btn-danger btn-sm"
                        onClick={() => removeFood(record.sysId)}
                      >
                        <i
                          className="fa fa-trash-o fa-1x"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapActionToProps)(FoodItem);
