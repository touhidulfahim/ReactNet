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
import { AddToPhotosTwoTone } from "@material-ui/icons";

const mapStateToProps = (state) => ({
  customerList: state.customerReducer.customers,
});
const mapDispatchToProps = {
  createCustomer: actions.addCustomer,
  editCustomer: actions.UpdateCustomer,
};

const initialFieldValues = {
  customerName: "",
  phone: "",
  email: "",
  address: "",
};

const CustomerForm = ({ classess, ...props }) => {
  const { addToast } = useToasts();
  const validate = (fieldValues = inputVal) => {
    let temp = { ...errors };
    if ("customerName" in fieldValues)
      temp.customerName = fieldValues.customerName
        ? ""
        : "This field is required";
    if ("phone" in fieldValues)
      temp.phone = fieldValues.phone ? "" : "This field is required";
    if ("email" in fieldValues)
      temp.email = fieldValues.email ? "" : "This field is required";
    if ("address" in fieldValues)
      temp.address = fieldValues.address ? "" : "This field is required";
    setErrors({
      ...temp,
    });

    if (fieldValues == inputVal)
      return Object.values(temp).every((x) => x == "");
  };

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
    if (validate()) {
      const onSuccess = () => {
        resetForm();
        addToast("Submitted success", { appearance: "success" });
      };
      if (props.currentId == 0) props.createCustomer(inputVal, onSuccess);
      else props.editCustomer(props.currentId, inputVal, onSuccess);
    }
    //
  };

  useEffect(() => {
    if (props.currentId != 0) {
      setInputVal({
        ...props.customerList.find((x) => x.sysId == props.currentId),
      });
      setErrors({});
    }
  }, [props.currentId]);

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
            invalid={errors.customerName}
          />
          <FormFeedback>{errors.customerName}</FormFeedback>
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
            invalid={errors.phone}
          />
          <FormFeedback>{errors.phone}</FormFeedback>
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
            invalid={errors.email}
          />
          <FormFeedback>{errors.email}</FormFeedback>
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
            invalid={errors.address}
          />
          <FormFeedback>{errors.address}</FormFeedback>
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
