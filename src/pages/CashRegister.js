// https://reactjs.org/docs/hooks-state.html
import React, { useState } from "react";
// https://react-bootstrap.github.io/layout/grid/#container
import { Table, Form, Button } from "react-bootstrap";

const CashRegister = () => {
  const [input, setInput] = useState("");
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmit] = useState(false);
  const [response, setResponse] = useState({});

  const register = [
    ["PENNYS", 1.01],
    ["NICKELS", 2.05],
    ["DIMES", 3.1],
    ["QUARTERS", 4.25],
    ["ONES", 90],
    ["FIVES", 55],
    ["TENS", 20],
    ["TWENTYS", 60],
    ["HUNDREDS", 100],
  ];

  const denom = [
    { name: "HUNDREDS", val: 100.0 },
    { name: "TWENTYS", val: 20.0 },
    { name: "TENS", val: 10.0 },
    { name: "FIVES", val: 5.0 },
    { name: "ONES", val: 1.0 },
    { name: "QUARTERS", val: 0.25 },
    { name: "DIMES", val: 0.1 },
    { name: "NICKELS", val: 0.05 },
    { name: "PENNYS", val: 0.01 },
  ];

  const checkCashRegister = (price, cash, cid) => {
    let output = { status: null, change: [] };
    let change = cash - price;

    // Transform CID array into drawer object
    let register = cid.reduce(
      function (acc, curr) {
        acc.total += curr[1];
        acc[curr[0]] = curr[1];
        return acc;
      },
      { total: 0 }
    );

    // Handle exact change
    if (change === 0) {
      output.status = "CLOSED";
      output.change = [];
      return output;
    }

    // Handle obvious insufficient funds
    if (register.total < change) {
      output.status = "INSUFFICIENT FUNDS";
      return output;
    }

    // Loop through the denomination array
    let change_arr = denom.reduce((acc, curr) => {
      let value = 0;
      // While there is still money of this type in the drawer
      // And while the denomination is larger than the change remaining
      while (register[curr.name] > 0 && change >= curr.val) {
        change -= curr.val;
        register[curr.name] -= curr.val;
        value += curr.val;

        // Round change to the nearest hundreth deals with precision errors
        change = Math.round(change * 100) / 100;
      }
      // Add this denomination to the output only if any was used.
      if (value > 0) {
        acc.push([curr.name, value]);
      }
      return acc; // Return the current change_arr
    }, []); // Initial value of empty array for reduce

    // If there are no elements in change_arr or we have leftover change, return
    // the string "Insufficient Funds"
    if (change_arr.length < 1 || change > 0) {
      output.status = "INSUFFICIENT FUNDS";
      return output;
    }

    // Here is your change, ma'am.
    output.status = "OPEN";
    output.change = change_arr;
    return output;
  };

  const handleInputChange = (event) => setInput(event.target.value);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity()) {
      event.preventDefault();
      setSubmit(true);
      setResponse(checkCashRegister(5, input, register));
      setValidated(false);
      event.target.reset();
    }
  };

  return (
    <section className="container">
      <div className="register d-flex flex-column vh-100 align-items-center justify-content-center text-center bg-light overflow-auto">
        <div className="container my-5">
          <Table responsive variant="dark">
            <thead>
              <tr>
                <th>Cash Register</th>
                {register.map((item, id1) => (
                  <td key={id1}>{item[0]}</td>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Amount</td>
                {register.map((item, id2) => (
                  <td key={id2}>{item[1]}</td>
                ))}
              </tr>
            </tbody>
          </Table>
        </div>

        <Form
          className="my-3 w-100"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Group className="align-items-center">
            <Form.Label className="h4">
              What is my change for a $5.00 purchase?
            </Form.Label>
            <Form.Control
              required
              type="number"
              step="0.01"
              placeholder="Enter payment amount"
              onChange={handleInputChange}
              className="my-3 mx-auto w-75 text-center"
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid amount (example - 10.00).
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit" className="mb-4">
            Submit
          </Button>
          {!submitted ? null : submitted &&
            response.status !== "INSUFFICIENT FUNDS" ? (
            <div className="container">
              <ul className="list-group">
                {response.change.map((item, id) => (
                  <li key={id} className="list-group-item text-success">
                    ${item[1]}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <h4 className="text-danger">Insufficient Funds</h4>
          )}
        </Form>
      </div>
    </section>
  );
};

export default CashRegister;
