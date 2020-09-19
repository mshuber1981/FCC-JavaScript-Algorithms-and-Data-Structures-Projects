// https://reactjs.org/docs/hooks-state.html
import React, { useState } from "react";
// https://react-bootstrap.github.io/layout/grid/#container
import { Card, CardDeck, Form, Button } from "react-bootstrap";

const RomanNumberals = () => {
  const [input, setInput] = useState("");
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmit] = useState(false);
  const [inputCopy, setInputCopy] = useState("");
  const [romans, setRomans] = useState("");

  const convertToRomans = (input) => {
    const getNumeral = (digit, lowStr, midStr, nextStr) => {
      switch (true) {
        case digit <= 3:
          return lowStr.repeat(digit);
        case digit === 4:
          return lowStr + midStr;
        case digit <= 8: // digits 5-8
          return midStr + lowStr.repeat(digit - 5);
        default:
          // digit 9
          return lowStr + nextStr;
      }
    };

    let str = "";

    // Thousands
    str += "M".repeat(Math.floor(input / 1000));
    input %= 1000;

    // Hundreds
    str += getNumeral(Math.floor(input / 100), "C", "D", "M");
    input %= 100;

    // Tens
    str += getNumeral(Math.floor(input / 10), "X", "L", "C");
    input %= 10;

    // Ones
    str += getNumeral(input, "I", "V", "X");

    return str;
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
      setRomans(convertToRomans(input));
      setValidated(false);
      event.target.reset();
    }
  };

  return (
    <section className="container">
      <div className="roman d-flex flex-column vh-100 align-items-center justify-content-center text-center bg-light overflow-auto">
        <CardDeck className="m-3">
          <Card>
            <Card.Body>
              <Card.Title>What is a Roman Numeral?</Card.Title>
              <Card.Text>
                Roman numerals are a numeral system that originated in ancient
                Rome and remained the usual way of writing numbers throughout
                Europe well into the Late Middle Ages.
              </Card.Text>
              <a
                href="https://en.wikipedia.org/wiki/Roman_numerals"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary">Roman Numberals - Wikipedia</Button>
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
          <Form.Group
            className="align-items-center"
            controlId="palindromeChecker"
          >
            <Form.Label className="h4">Roman Numeral Converter</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Enter number to convert"
              onChange={handleInputChange}
              className="my-3 mx-auto w-75 text-center"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mb-4">
            Submit
          </Button>
          {!submitted ? null : submitted ? (
            <h4 className="text-success">
              {inputCopy} = {romans}
            </h4>
          ) : null}
        </Form>
      </div>
    </section>
  );
};

export default RomanNumberals;
