import React, { useEffect } from "react";
import * as actions from "../../redux/actionCreator/ActionCreator";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import FoodForm from "./FoodForm";

const mapStateToProps = (state) => {
  return {
    foodList: state.foodReducer.foods,
  };
};

const mapActionToProps = {
  fetchFoods: actions.getFoodList,
};

const FoodItem = (props) => {
  useEffect(() => {
    props.fetchFoods();
  }, []);

  const showDetails = (key) => {
    alert("details" + key);
  };

  const updateRecord = (key) => {
    alert("update" + key);
  };

  const deleteRecord = (key) => {
    alert("delete" + key);
  };
  return (
    <div>
      <div className="row col-md-12" style={{ marginTop: "50px" }}>
        <div className="col-md-4">
          <FoodForm />
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
                  <tr key={record.sysId}>
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
                        onClick={(key) => updateRecord(record.sysId)}
                      >
                        <i className="fa fa-pencil-square-o fa-1x"></i>
                      </a>
                      |
                      <a
                        className="btn btn-danger btn-sm"
                        onClick={(key) => deleteRecord(record.sysId)}
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
