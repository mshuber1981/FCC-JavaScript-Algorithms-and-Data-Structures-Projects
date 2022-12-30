import React from "react";
// Components
import { Container } from "react-bootstrap";
import { Title } from "../components/globalStyledComponents";
import PalindromeAlgo from "../algos/PalindromeAlgo";

export default function Palindrome() {
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
        <PalindromeAlgo />
      </section>
    </>
  );
}
