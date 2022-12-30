import React from "react";
import { useAppContext } from "../appContext";
// Components
import { Form, Button } from "react-bootstrap";

export default function PalindromeAlgo() {
  const [input, setInput] = React.useState("");
  const [validated, setValidated] = React.useState(false);
  const [submitted, setSubmit] = React.useState(false);
  const [palindrome, checkPalindrome] = React.useState("");
  const [inputCopy, setInputCopy] = React.useState("");
  const { theme } = useAppContext();

  const handleInputChange = (event) => setInput(event.target.value);

  function handleSubmit(event) {
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
  }

  return (
    <>
      <p>
        A palindrome is a word, number, phrase, or other sequence of characters
        which reads the same backward as forward.
      </p>
      <Form
        className=""
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group className="align-items-center">
          <Form.Control
            required
            type="text"
            placeholder="Enter word to check"
            onChange={handleInputChange}
            className="my-4"
          />
          <Form.Control.Feedback type="invalid">
            Please enter at least one character
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          variant={theme === "light" ? "outline-dark" : "outline-light"}
          type="submit"
          className="mb-4"
        >
          Submit
        </Button>
        {!submitted ? null : submitted && !palindrome ? (
          <h4 className="text-danger">{inputCopy} is not a palindrome</h4>
        ) : (
          <h4 className="text-success">{inputCopy} is a palindrome</h4>
        )}
      </Form>
    </>
  );
}
