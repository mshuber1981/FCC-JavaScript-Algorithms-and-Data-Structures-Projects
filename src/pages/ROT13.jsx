import React from "react";
// Components
import { Container } from "react-bootstrap";
import { Title } from "../components/globalStyledComponents";

export default function ROT13() {
  return (
    <>
      <main>
        <section className="section">
          <Container className="d-flex">
            <Title>
              <h2>ROT13</h2>
              <div className="underline"></div>
            </Title>
          </Container>
        </section>
      </main>
    </>
  );
}
