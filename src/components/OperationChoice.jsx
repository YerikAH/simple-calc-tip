import React, { useState } from "react";
import Money from "../images/icon-dollar.svg";
import Person from "../images/icon-person.svg";
import "./OperationChoice.css";

let porcen;
let moneTto;
let personCount;
function OperationChoice(props) {
  //
  // form.por;
  // form.forPeople;
  const initialForm = {
    bill: "",
    forPeople: "",
  };
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [valueOne, setValueOne] = useState(0.0);
  const [valueTwo, setValueTwo] = useState(0.0);
  const handleForm = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    // console.log(porcen);
  };
  const validateForm = (form) => {
    let errors = {};
    const numberValidate = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;
    if (!form.bill.trim()) {
      errors.bill = `This field is required`;
    } else if (!numberValidate.test(form.bill.trim())) {
      errors.bill = `You may only enter numbers`;
    } else if (form.bill.trim() == "0") {
      errors.bill = `Can't be zero`;
    }
    if (!form.forPeople.trim()) {
      errors.forPeople = `This field is required`;
    } else if (!numberValidate.test(form.forPeople.trim())) {
      errors.forPeople = `You may only enter numbers`;
    } else if (form.forPeople.trim() == "0") {
      errors.bill = `Can't be zero`;
    }

    return errors;
  };

  const styleError = {
    border: "2px solid #AF796D",
    borderRadius: "0.55em",
  };
  const textError = {
    color: "#AF796D",
  };
  const handleBlur = (e) => {
    handleForm(e);
    setErrors(validateForm(form));
    porcen = parseInt(form.bill);
    moneTto = form.por;
    personCount = parseInt(form.forPeople);

    if (!porcen || !personCount) {
    } else {
      let opa;
      let opTwo;
      let opThree;
      let opFour;
      if (moneTto == "5%") {
        opa = 0.05 * porcen;
        opTwo = opa / personCount; //1 first result
        opThree = porcen / personCount;
        opFour = opTwo + opThree; // 2 second result
      } else if (moneTto == "10%") {
        opa = 0.1 * porcen;
        opTwo = opa / personCount; //1 first result
        opThree = porcen / personCount;
        opFour = opTwo + opThree; // 2 second result
      } else if (moneTto == "15%") {
        opa = 0.15 * porcen;
        opTwo = opa / personCount; //1 first result
        opThree = porcen / personCount;
        opFour = opTwo + opThree; // 2 second result
      } else if (moneTto == "25%") {
        opa = 0.25 * porcen;
        opTwo = opa / personCount; //1 first result
        opThree = porcen / personCount;
        opFour = opTwo + opThree; // 2 second result
      } else if (moneTto == "50%") {
        opa = 0.5 * porcen;
        opTwo = opa / personCount; //1 first result
        opThree = porcen / personCount;
        opFour = opTwo + opThree; // 2 second result
      } else {
        moneTto = parseInt(form.por);
        let opErt = moneTto / 100;
        opa = opErt * porcen;
        opTwo = opa / personCount; //1 first result
        opThree = porcen / personCount;
        opFour = opTwo + opThree; // 2 second result
      }
      setValueOne(opFour);
      setValueTwo(opTwo);
      props.numbersOne(valueOne);
      props.numbersTwo(valueTwo);
    }
  };
  return (
    <div className="operation">
      <form action="">
        <label htmlFor="bill" className="title-lable">
          Bill
          {errors.bill && (
            <p className="errorForm" style={textError}>
              {errors.bill}
            </p>
          )}
        </label>
        {errors.bill && (
          <div className="bill-icon" style={styleError}>
            <img src={Money} alt="" />
            <input
              type="text"
              id="bill"
              name="bill"
              placeholder="0"
              onChange={handleForm}
              onBlur={handleBlur}
            />
          </div>
        )}
        {!errors.bill && (
          <div className="bill-icon">
            <img src={Money} alt="" />
            <input
              type="text"
              id="bill"
              name="bill"
              placeholder="0"
              value={form.bill}
              onChange={handleForm}
              onBlur={handleBlur}
            />
          </div>
        )}
        <label htmlFor="por" className="title-lable">
          Select tip %
        </label>
        <div className="grid-for-por">
          <input
            type="submit"
            id="por"
            name="por"
            value="5%"
            className="por-child"
            onClick={handleForm}
          />
          <input
            type="submit"
            id="por"
            name="por"
            value="10%"
            className="por-child"
            onClick={handleForm}
          />
          <input
            type="submit"
            id="por"
            name="por"
            value="15%"
            className="por-child"
            onClick={handleForm}
          />
          <input
            type="submit"
            id="por"
            name="por"
            value="25%"
            className="por-child"
            onClick={handleForm}
          />
          <input
            type="submit"
            id="por"
            name="por"
            value="50%"
            className="por-child"
            onClick={handleForm}
          />
          <input
            type="number"
            id="por"
            name="por"
            placeholder="Custom"
            className="customPor"
            onChange={handleForm}
            onBlur={handleBlur}
          />
        </div>
        <label htmlFor="forPeople" className="title-lable">
          Number of people
          {errors.forPeople && (
            <p className="errorForm" style={textError}>
              {errors.forPeople}
            </p>
          )}
        </label>
        {errors.forPeople && (
          <div className="people-icon" style={styleError}>
            <img src={Person} alt="" />
            <input
              type="text"
              id="forPeople"
              name="forPeople"
              placeholder="0"
              onChange={handleForm}
              onBlur={handleBlur}
            />
          </div>
        )}
        {!errors.forPeople && (
          <div className="people-icon">
            <img src={Person} alt="" />
            <input
              type="text"
              id="forPeople"
              name="forPeople"
              placeholder="0"
              value={form.forPeople}
              onChange={handleForm}
              onBlur={handleBlur}
            />
          </div>
        )}
      </form>
    </div>
  );
}

export default OperationChoice;
