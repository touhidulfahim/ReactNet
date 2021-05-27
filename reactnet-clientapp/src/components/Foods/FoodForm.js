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

const mapStateToProps = (state) => ({
  foodList: state.foodReducer.foods,
});

const mapActionToProps = {
  createFood: actions.addFood,
  editFood: actions.updateFood,
};

const initialFieldValues = {
  foodName: "",
  price: "",
};

const pStyle = {
  "&input::-webkit-outer-spin-button, &input::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },
};

const FoodForm = ({ classes, ...props }) => {
  const { addToast } = useToasts();

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
        addToast("Submitted successfully", { appearance: "success" });
      };
      if (props.currentId == 0) props.createFood(inputVal, onSuccess);
      else props.editFood(props.currentId, inputVal, onSuccess);
    }
  };

  useEffect(() => {
    if (props.currentId != 0) {
      setInputVal({
        ...props.foodList.find((x) => x.sysId == props.currentId),
      });
      setErrors({});
    }
  }, [props.currentId]);

  return (
    <div>
      <Form noValidate onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="foodName">Name</Label>
          <Input
            type="text"
            name="foodName"
            id="foodName"
            placeholder="Enter name"
            value={inputVal.foodName}
            onChange={inputChangeHandler}
            invalid={errors.foodName}
          />
          <FormFeedback>{errors.foodName}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input
            style={pStyle}
            type="number"
            name="price"
            id="price"
            maxLength={9}
            placeholder="Enter amount"
            value={inputVal.price}
            invalid={errors.price}
            onChange={inputChangeHandler}
          />
          <FormFeedback>{errors.price}</FormFeedback>
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

export default connect(mapStateToProps, mapActionToProps)(FoodForm);
