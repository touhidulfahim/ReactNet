import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/dCandidate";
import { Table } from "reactstrap";

const mapStateToProps = (state) => ({
  dCandidateList: state.dCandidate.list,
});

const mapActionToProps = {
  fetchAllDCandidates: actions.fetchAll,
};

const DCandidate = (props) => {
  const showDetails = (key) => {
    alert("details" + key);
  };

  const updateRecord = (key) => {
    alert("update" + key);
  };

  const deleteRecord = (key) => {
    alert("delete" + key);
  };

  useEffect(() => {
    props.fetchAllDCandidates();
  }, []);

  return (
    <div>
      <div className="row col-md-12" style={{ marginTop: "50px" }}>
        <div class="col-md-4">
          <form>
            <h2>INPUT AREA</h2>
          </form>
        </div>
        <div class="col-md-8">
          <Table className="table table-hover table-border table-sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {props.dCandidateList.map((record, index) => {
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

export default connect(mapStateToProps, mapActionToProps)(DCandidate);
