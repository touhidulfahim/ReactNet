import React, { useEffect } from "react";
import * as actions from "../../redux/actionCreator/ActionCreator";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    customerList: state.customerReducer.customers,
  };
};

const mapActionToProps = {
  fetchCustomer: actions.getCustomerList,
};

const CustomerList = (props) => {
  useEffect(() => {
    props.fetchCustomer();
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
          <form>
            <h2>INPUT AREA</h2>
          </form>
        </div>
        <div className="col-md-8">
          <Table className="table table-hover table-border table-sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {props.customerList.map((record, index) => {
                return (
                  <tr key={record.sysId}>
                    <td>{record.customerName}</td>
                    <td>{record.phone}</td>
                    <td>{record.email}</td>
                    <td>{record.address}</td>
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

export default connect(mapStateToProps, mapActionToProps)(CustomerList);
