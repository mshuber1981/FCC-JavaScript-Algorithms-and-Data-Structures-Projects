import React from "react";
import { useAppContext } from "../appContext";
// Algos
import { convertToRoman } from "../algos";
// Components
import { Container, Form, Button } from "react-bootstrap";
import { Title } from "../components/globalStyledComponents";
import CodeModal from "../components/CodeModal";

export default function RomanNumerals() {
  const [input, setInput] = React.useState("");
  const [validated, setValidated] = React.useState(false);
  const [submitted, setSubmit] = React.useState(false);
  const [inputCopy, setInputCopy] = React.useState("");
  const [romans, setRomans] = React.useState("");
  const { theme } = useAppContext();

  const pageTitle = "Roman Numeral Converter";

  const code = `
  function convertToRoman(num) {
    function getNumeral(digit, lowStr, midStr, nextStr) {
      switch (true) { 
        case digit <= 3:
          return lowStr.repeat(digit); 
        case digit === 4:
          return lowStr + midStr;     
        case digit <= 8: // digits 5-8
          return midStr + lowStr.repeat(digit - 5);
        default: // digit 9
          return lowStr + nextStr    
      }            
    }       

    let str = ""

    // Thousands
    str += "M".repeat(Math.floor(num/1000));
    num %= 1000;

    // Hundreds
    str += getNumeral(Math.floor(num/100), 'C', 'D', 'M')
    num %= 100;

    // Tens
    str += getNumeral(Math.floor(num/10), 'X', 'L', 'C')
    num %= 10;

    // Ones
    str += getNumeral(num, 'I', 'V', 'X')

    return str;
  }
  `;

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
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="my-4">
            <Form.Control
              required
              type="number"
              placeholder="Enter number to convert"
              onChange={handleInputChange}
              className="my-4"
            />
            <Form.Control.Feedback type="invalid">
              Please enter at least one number
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            variant={theme === "light" ? "outline-dark" : "outline-light"}
            type="submit"
          >
            Submit
          </Button>
          {!submitted ? null : submitted ? (
            <h4 className="my-4">
              {inputCopy} = {romans}
            </h4>
          ) : null}
        </Form>
        <CodeModal code={code} />
      </section>
    </>
  );
}
