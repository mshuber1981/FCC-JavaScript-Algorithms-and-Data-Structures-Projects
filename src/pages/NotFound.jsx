import React from "react";
// Components
import { Container } from "react-bootstrap";
import { Title } from "../components/globalStyledComponents";

export default function NotFound() {
  return (
    <>
      <main>
        <section className="section">
          <Container className="d-flex">
            <Title>
              <h2>404</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <p>Sorry, page not found...</p>
        </section>
      </main>
    </>
  );
}
