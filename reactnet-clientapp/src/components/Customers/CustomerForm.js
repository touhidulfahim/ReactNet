import React, { useEffect } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";
import * as actions from "../../redux/actionCreator/ActionCreator";
import ControlForm from "../ControlForm";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

const initialFieldValues = {};

const CustomerForm = (props) => {
  const validate = (fieldValues = inputVal) => {};

  const {
    inputVal,
    setInputVal,
    errors,
    setErrors,
    inputChangeHandler,
    resetForm,
  } = ControlForm(initialFieldValues, validate, props.setCurrentId);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submit form");
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            name="customerName"
            id="customerName"
            placeholder="Enter name"
            value={inputVal.customerName}
            onChange={inputChangeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label>Phone</Label>
          <Input
            type="text"
            name="phone"
            id="phone"
            placeholder="Enter phone"
            value={inputVal.phone}
            onChange={inputChangeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="Enter email"
            value={inputVal.email}
            onChange={inputChangeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label>Address</Label>
          <Input
            type="text"
            name="address"
            id="address"
            placeholder="Enter name"
            value={inputVal.address}
            onChange={inputChangeHandler}
          />
        </FormGroup>
        <FormGroup>
          <br />
          <Button type="submit" color="primary">
            Submit
          </Button>{" "}
          ||{" "}
          <Button color="secondary" onClick={resetForm}>
            Reset
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerForm);
