import React from "react";
import { useAppContext } from "../appContext";
// Algos
import { palindrome } from "../algos";
// Components
import { Button, Form, Container } from "react-bootstrap";
import { Title } from "../components/globalStyledComponents";
import CodeModal from "../components/CodeModal";

export default function Palindrome() {
  const [input, setInput] = React.useState("");
  const [validated, setValidated] = React.useState(false);
  const [submitted, setSubmit] = React.useState(false);
  const [isPalindrome, checkPalindrome] = React.useState("");
  const [inputCopy, setInputCopy] = React.useState("");
  const { theme } = useAppContext();

  const pageTitle = "Palindrome Checker";

  const code = `
  function palindrome(str) {
    return (
          str.replace(/[\\W_]/g, "").toLowerCase() ===
          str
              .replace(/[\\W_]/g, "")
              .toLowerCase()
              .split("")
              .reverse()
              .join("")
          );
  }  
  `;

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
      checkPalindrome(palindrome(input));
      setInputCopy(input);
      setValidated(false);
      event.target.reset();
    }
  }

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
        <p className="description">
          A palindrome is a word, number, phrase, or other sequence of
          characters which reads the same backward as forward.
        </p>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="my-4">
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
            className=""
          >
            Submit
          </Button>
          {!submitted ? null : submitted && !isPalindrome ? (
            <h4 className="my-4">{inputCopy} is not a palindrome</h4>
          ) : (
            <h4 className="my-4">{inputCopy} is a palindrome</h4>
          )}
        </Form>
        <CodeModal code={code} />
      </section>
    </>
  );
}
