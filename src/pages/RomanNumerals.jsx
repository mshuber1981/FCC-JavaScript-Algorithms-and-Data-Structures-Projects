import React from "react";
import { useAppContext } from "../appContext";
// Algos
import { convertToRoman } from "../algos";
// Components
import { Container, Form, Button } from "react-bootstrap";
import { Title } from "../components/globalStyledComponents";

export default function RomanNumerals() {
  const [input, setInput] = React.useState("");
  const [validated, setValidated] = React.useState(false);
  const [submitted, setSubmit] = React.useState(false);
  const [inputCopy, setInputCopy] = React.useState("");
  const [romans, setRomans] = React.useState("");
  const { theme } = useAppContext();

  const pageTitle = "Roman Numeral Converter";

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
      setRomans(convertToRoman(input));
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
        <p className="description">
          Roman numerals are a numeral system that originated in ancient Rome
          and remained the usual way of writing numbers throughout Europe well
          into the Late Middle Ages.
        </p>
        <Form
          className="w-100"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Group>
            <Form.Control
              required
              type="number"
              placeholder="Enter number to convert"
              onChange={handleInputChange}
              className="my-4 mx-auto text-center"
            />
            <Form.Control.Feedback type="invalid">
              Please enter at least one number.
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            variant={theme === "light" ? "outline-dark" : "outline-light"}
            type="submit"
            className="mb-4"
          >
            Submit
          </Button>
          {!submitted ? null : submitted ? (
            <h4 className="text-success">
              {inputCopy} = {romans}
            </h4>
          ) : null}
        </Form>
      </section>
    </>
  );
}
