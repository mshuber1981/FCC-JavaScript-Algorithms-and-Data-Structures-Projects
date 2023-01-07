import React from "react";
import { useAppContext } from "../appContext";
// Algos
import { rot13 } from "../algos";
// Components
import { Container, Button, Form } from "react-bootstrap";
import { Title } from "../components/globalStyledComponents";

export default function CaesarsCipher() {
  const [input, setInput] = React.useState("");
  const [validInput, setValidInput] = React.useState(null);
  const [validated, setValidated] = React.useState(false);
  const [submitted, setSubmit] = React.useState(false);
  const [inputCopy, setInputCopy] = React.useState("");
  const [encoded, encode] = React.useState("");
  const { theme } = useAppContext();

  const pageTitle = "Caesars Cipher";

  function handleInputChange(event) {
    setInput(event.target.value);
    setValidInput(true);
  }

  function handleSubmit(event) {
    const form = event.target;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidInput(false);
    }
    setValidated(true);
    if (form.checkValidity()) {
      event.preventDefault();
      setSubmit(true);
      setInputCopy(input);
      encode(rot13(input));
      setValidated(false);
      setValidInput(null);
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
          ROT13 ("rotate by 13 places", sometimes hyphenated ROT-13) is a simple
          letter substitution cipher that replaces a letter with the 13th letter
          after it, in the alphabet. ROT13 is a special case of the Caesar
          cipher which was developed in ancient Rome.
        </p>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="my-4">
            <Form.Select
              required
              isValid={validInput}
              onChange={handleInputChange}
              className="my-4"
            >
              <option value="">Select a phrase to decode</option>
              <option value="SERR PBQR PNZC">SERR PBQR PNZC</option>
              <option value="SERR CVMMN!">SERR CVMMN!</option>
              <option value="SERR YBIR?">SERR YBIR?</option>
              <option value="GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.">
                GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.
              </option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select a phrase to decode.
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            variant={theme === "light" ? "outline-dark" : "outline-light"}
            type="submit"
            className="mb-4"
          >
            Submit
          </Button>
          {submitted ? (
            <h4 className="text-success">
              {inputCopy} = {encoded}
            </h4>
          ) : null}
        </Form>
      </section>
    </>
  );
}
