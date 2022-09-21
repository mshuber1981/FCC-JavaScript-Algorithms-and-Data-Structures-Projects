import React from "react";
// Components
import { Container } from "react-bootstrap";
import { Title } from "../components/globalStyledComponents";

export default function RomanNumerals() {
  return (
    <>
      <main>
        <section className="section">
          <Container className="d-flex">
            <Title>
              <h2>Roman Numeral Converter</h2>
              <div className="underline"></div>
            </Title>
          </Container>
        </section>
      </main>
    </>
  );
}
