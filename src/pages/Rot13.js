// https://reactjs.org/docs/hooks-state.html
import React, { useState } from "react";
// https://react-bootstrap.github.io/layout/grid/#container
import { Card, CardDeck, Form, Button } from "react-bootstrap";

const Rot13 = () => {
  const [input, setInput] = useState("");
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmit] = useState(false);
  const [inputCopy, setInputCopy] = useState("");
  const [encoded, encode] = useState("");

  const rot13 = (str) => {
    return (str + "").replace(/[a-zA-Z]/gi, function (s) {
      return String.fromCharCode(
        s.charCodeAt(0) + (s.toLowerCase() < "n" ? 13 : -13)
      );
    });
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
      encode(rot13(input));
      setValidated(false);
      event.target.reset();
    }
  };

  return (
    <section className="container">
      <div className="rot13 d-flex flex-column vh-100 align-items-center justify-content-center text-center bg-light overflow-auto">
        <CardDeck className="m-3">
          <Card>
            <Card.Body>
              <Card.Title>What is ROT13?</Card.Title>
              <Card.Text>
                ROT13 ("rotate by 13 places", sometimes hyphenated ROT-13) is a
                simple letter substitution cipher that replaces a letter with
                the 13th letter after it, in the alphabet. ROT13 is a special
                case of the Caesar cipher which was developed in ancient Rome.
              </Card.Text>
              <a
                href="https://en.wikipedia.org/wiki/ROT13"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary">ROT13 - Wikipedia</Button>
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
            <Form.Label className="h4">ROT13 Encoder</Form.Label>
            <Form.Control
              required
              type="text"
              pattern="[\D ]+"
              placeholder="Enter text only to convert"
              onChange={handleInputChange}
              className="my-3 mx-auto w-75 text-center"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mb-4">
            Submit
          </Button>
          {!submitted ? null : submitted ? (
            <h4 className="text-success">
              {inputCopy} = {encoded}
            </h4>
          ) : null}
        </Form>
      </div>
    </section>
  );
};

export default Rot13;
