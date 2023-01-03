import React from "react";
import { useAppContext } from "../appContext";
// Algos
import { palindromeAlgo } from "../algos";
// Components
import { Button, Form, Container } from "react-bootstrap";
import { Title } from "../components/globalStyledComponents";

export default function Palindrome() {
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
      checkPalindrome(palindromeAlgo(input));
      setInputCopy(input);
      setValidated(false);
      event.target.reset();
    }
  }
  const pageTitle = "Palindrome Checker";

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
        <p>
          A palindrome is a word, number, phrase, or other sequence of
          characters which reads the same backward as forward.
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
      </section>
    </>
  );
}
