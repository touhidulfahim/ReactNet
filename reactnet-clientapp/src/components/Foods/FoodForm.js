import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
} from "reactstrap";
import * as actions from "../../redux/actionCreator/ActionCreator";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { Grid, TextField, FormHelperText } from "@material-ui/core";
import { ErrorSharp } from "@material-ui/icons";

const mapStateToProps = (state) => {
  return {
    foodList: state.foodReducer.foods,
  };
};

const mapActionToProps = {
  createFood: actions.addFood,
  //updateDCandidate: actions.update,
};

const initialFieldValues = {
  foodName: "",
  price: "",
};

const FoodForm = (props) => {
  const { addToast } = useToasts();

  const [inputVal, setInputVal] = useState(initialFieldValues);
  const [errors, setErrors] = useState({});

  const validate = (fieldValues = inputVal) => {
    let temp = { ...errors };
    console.log("input Val", inputVal);
    if ("foodName" in fieldValues)
      temp.foodName = fieldValues.foodName ? "" : "This field is required.";
    if ("price" in fieldValues)
      temp.price = fieldValues.price ? "" : "This field is required.";
    setErrors({
      ...temp,
    });

    if (fieldValues == inputVal)
      return Object.values(temp).every((x) => x == "");
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    const fieldValue = { [name]: value };
    setInputVal({
      ...inputVal,
      ...fieldValue,
    });
    validate(fieldValue);
  };

  const resetForm = () => {
    setInputVal({
      ...initialFieldValues,
    });
    setErrors({});
    //setCurrentId(0);
  };

  // const onSuccess = () => {
  //   resetForm();
  //   addToast("Submitted successfully", { appearance: "success" });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const onSuccess = () => {
        resetForm();
        addToast("Submitted successfully", { appearance: "success" });
      };
      //if (props.currentId == 0)
      props.createFood(inputVal, onSuccess);
      //else props.updateDCandidate(props.currentId, values, onSuccess);
    }
  };
  return (
    <div>
      <Form noValidate onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="foodName">Name</Label>
          <Input
            type="text"
            name="foodName"
            id="foodName"
            value={inputVal.foodName}
            onChange={inputChangeHandler}
            invalid={errors.foodName}
          />
          <FormFeedback>{errors.foodName}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input
            type="text"
            name="price"
            id="price"
            value={inputVal.price}
            invalid={errors.price}
            onChange={inputChangeHandler}
          />
          <FormFeedback>{errors.price}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <br />
          <Button type="submit">Submit</Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default connect(mapStateToProps, mapActionToProps)(FoodForm);
