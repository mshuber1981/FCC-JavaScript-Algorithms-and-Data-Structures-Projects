import React from "react";
// Algos
import { telephoneCheck } from "../algos";
// Components
import { Button, Container, Form } from "react-bootstrap";
import { Title } from "../components/globalStyledComponents";

export default function ValidPhoneNumber() {
  const [input, setInput] = React.useState("");
  const [validated, setValidated] = React.useState(false);
  const [submitted, setSubmit] = React.useState(false);
  const [inputCopy, setInputCopy] = React.useState("");
  const [phoneCheck, setPhoneCheck] = React.useState("");

  const pageTitle = "Telephone Number Validator";

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
      setInputCopy(input);
      setPhoneCheck(telephoneCheck(input));
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
      <section className="section">
        <Container className="d-flex">
          <Title>
            <h2>{pageTitle}</h2>
            <div className="underline"></div>
          </Title>
        </Container>
        <p className="description">
          The North American Numbering Plan (NANP) is a telephone numbering plan
          for World Zone 1, which comprises twenty-five distinct regions in
          twenty countries primarily in North America, including the Caribbean.
          Some North American countries, most notably Mexico, do not participate
          in the NANP.
        </p>
      </section>
    </>
  );
}
