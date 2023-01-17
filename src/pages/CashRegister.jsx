import React from "react";
import { useAppContext } from "../appContext";
// Algos
import { checkCashRegister } from "../algos";
// Components
import { Button, Container, Form, Table } from "react-bootstrap";
import { Title } from "../components/globalStyledComponents";

export default function CashRegister() {
  const [input, setInput] = React.useState("");
  const [validated, setValidated] = React.useState(false);
  const [submitted, setSubmit] = React.useState(false);
  const [response, setResponse] = React.useState({});
  const { theme } = useAppContext();

  const pageTitle = "Cash Register";

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
      </section>
    </>
  );
}
