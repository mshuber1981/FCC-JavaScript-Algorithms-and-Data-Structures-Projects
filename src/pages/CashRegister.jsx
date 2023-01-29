import React from "react";
import { useAppContext } from "../appContext";
// Algos
import { checkCashRegister } from "../algos";
// Components
import { Button, Container, Form, Table } from "react-bootstrap";
import { Title } from "../components/globalStyledComponents";
import CodeModal from "../components/CodeModal";

export default function CashRegister() {
  const [input, setInput] = React.useState("");
  const [validated, setValidated] = React.useState(false);
  const [submitted, setSubmit] = React.useState(false);
  const [response, setResponse] = React.useState({});
  const { theme } = useAppContext();

  const pageTitle = "Cash Register";

  const code = `
const denom = [
  { name: "ONE HUNDRED", val: 100.0 },
  { name: "TWENTY", val: 20.0 },
  { name: "TEN", val: 10.0 },
  { name: "FIVE", val: 5.0 },
  { name: "ONE", val: 1.0 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.1 },
  { name: "NICKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 },
];

const checkCashRegister = (price, cash, cid) => {
  let output = { status: null, change: [] };
  let change = cash - price;

  // Transform CID array into drawer object
  let register = cid.reduce(
    (acc, curr) => {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );

  // Handle exact change
  if (register.total === change) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }

  // Handle obvious insufficient funds
  if (register.total < change) {
    output.status = "INSUFFICIENT_FUNDS";
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
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  // Here is your change, ma'am.
  output.status = "OPEN";
  output.change = change_arr;
  return output;
};
`;

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
      setResponse(checkCashRegister(5.0, input, register));
      setValidated(false);
      event.target.reset();
    }
  };

  React.useEffect(() => {
    const updateTitle = () => (document.title = pageTitle);
    updateTitle();
  }, []);

  return (
    <>
      <section className="section text-center">
        <Container className="d-flex">
          <Title>
            <h2>{pageTitle}</h2>
            <div className="underline"></div>
          </Title>
        </Container>
        <Container>
          <Table responsive variant={theme === "light" ? "dark" : "light"}>
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
                  <td key={id2}>{`$ ${item[1]}`}</td>
                ))}
              </tr>
            </tbody>
          </Table>
        </Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="my-4">
            <Form.Label className="h4">
              What is my change for a $5.00 purchase?
            </Form.Label>
            <Form.Control
              required
              type="number"
              step="0.01"
              placeholder="Enter payment amount"
              onChange={handleInputChange}
              className="my-4"
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid amount (example - 10.00).
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            variant={theme === "light" ? "outline-dark" : "outline-light"}
            type="submit"
          >
            Submit
          </Button>
          {!submitted ? null : response.status === "NO_SALE" ? (
            <h4 className="my-4 text-danger">
              No sale, you do not have enough money!
            </h4>
          ) : submitted &&
            response.status !== "INSUFFICIENT_FUNDS" &&
            response.change.length !== 0 ? (
            <div className="my-4">
              <h4 className="text-success">Change</h4>
              <ul className="list-group">
                {response.change.map((item, id) => (
                  <li key={id} className="list-group-item">
                    {item[0]} - ${item[1]}
                  </li>
                ))}
              </ul>
            </div>
          ) : response.status === "CLOSED" && response.change.length === 0 ? (
            <h4 className="my-4 text-success">No change due</h4>
          ) : (
            <h4 className="my-4 text-danger">
              No sale, insufficient funds to make change!
            </h4>
          )}
        </Form>
        <CodeModal code={code} />
      </section>
    </>
  );
}
