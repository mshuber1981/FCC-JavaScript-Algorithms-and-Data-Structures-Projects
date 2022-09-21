import React from "react";
// Components
import { Container } from "react-bootstrap";
import { Title } from "../components/globalStyledComponents";

export default function CashRegister() {
  return (
    <>
      <main>
        <section className="section">
          <Container className="d-flex">
            <Title>
              <h2>Cash Register</h2>
              <div className="underline"></div>
            </Title>
          </Container>
        </section>
      </main>
    </>
  );
}
