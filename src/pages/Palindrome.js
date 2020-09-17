// https://reactjs.org/docs/hooks-state.html
import React, { useState } from "react";
// https://react-bootstrap.github.io/layout/grid/#container
import { Card, CardDeck, Form, Button } from "react-bootstrap";

const Palindrome = () => {
  const [input, setInput] = useState("");
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmit] = useState(false);
  const [palindrome, checkPalindrome] = useState("");
  const [inputCopy, setInputCopy] = useState("");

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
      checkPalindrome(
        input.replace(/[\W_]/g, "").toLowerCase() ===
          input.replace(/[\W_]/g, "").toLowerCase().split("").reverse().join("")
      );
      setInputCopy(input);
      setValidated(false);
      event.target.reset();
    }
  };

  return (
    <section className="container">
      <div className="palindrome d-flex flex-column vh-100 align-items-center justify-content-center bg-light text-center overflow-auto">
        <CardDeck className="my-3">
          <Card>
            <Card.Body>
              <Card.Title>What is a Palindrome?</Card.Title>
              <Card.Text>
                A palindrome is a word, number, phrase, or other sequence of
                characters which reads the same backward as forward.
              </Card.Text>
              <a
                href="https://en.wikipedia.org/wiki/Palindrome"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary">Palindrome - Wikipedia</Button>
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
            <Form.Label className="h4">Palindrome Checker</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter word to check"
              onChange={handleInputChange}
              className="my-3 mx-auto w-75 text-center"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mb-4">
            Submit
          </Button>
          {!submitted ? null : submitted && !palindrome ? (
            <h4 className="text-danger">{inputCopy} is not a Palindrome.</h4>
          ) : (
            <h4 className="text-success">{inputCopy} is a Palindrome.</h4>
          )}
        </Form>
      </div>
    </section>
  );
};

export default Palindrome;
