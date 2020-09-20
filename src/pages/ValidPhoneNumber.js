// https://reactjs.org/docs/hooks-state.html
import React, { useState } from "react";
// https://react-bootstrap.github.io/layout/grid/#container
import { Card, CardDeck, Form, Button } from "react-bootstrap";

const ValidPhoneNumber = () => {
  const [input, setInput] = useState("");
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmit] = useState(false);
  const [inputCopy, setInputCopy] = useState("");
  const [phoneCheck, setPhoneCheck] = useState("");

  const telephoneCheck = (str) => {
    // eslint-disable-next-line
    let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
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
      setInputCopy(input);
      setPhoneCheck(telephoneCheck(input));
      setValidated(false);
      event.target.reset();
    }
  };

  return (
    <section className="container">
      <div className="phone d-flex flex-column vh-100 align-items-center justify-content-center text-center bg-light overflow-auto">
        <CardDeck className="m-3">
          <Card>
            <Card.Body>
              <Card.Title>What is NANP?</Card.Title>
              <Card.Text>
                The North American Numbering Plan (NANP) is a telephone
                numbering plan for World Zone 1, which comprises twenty-five
                distinct regions in twenty countries primarily in North America,
                including the Caribbean. Some North American countries, most
                notably Mexico, do not participate in the NANP.
              </Card.Text>
              <a
                href="https://en.wikipedia.org/wiki/North_American_Numbering_Plan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary">NANP - Wikipedia</Button>
              </a>
            </Card.Body>
          </Card>
        </CardDeck>

        <Form
          className="my-3 w-100"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Group className="align-items-center">
            <Form.Label className="h4">
              Is it a valid US phone number format?
            </Form.Label>
            <Form.Control
              required
              type="tel"
              placeholder="Enter phone number to check"
              onChange={handleInputChange}
              className="my-3 mx-auto w-75 text-center"
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid phone number (example 5555555555 or
              555-555-5555).
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit" className="mb-4">
            Submit
          </Button>
          {!submitted ? null : submitted && !phoneCheck ? (
            <h4 className="text-danger">
              {inputCopy} is not a valid US phone number.
            </h4>
          ) : (
            <h4 className="text-success">
              {inputCopy} is a valid US phone number.
            </h4>
          )}
        </Form>
      </div>
    </section>
  );
};

export default ValidPhoneNumber;
