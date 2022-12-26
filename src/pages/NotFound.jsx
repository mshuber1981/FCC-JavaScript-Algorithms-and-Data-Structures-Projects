import React from "react";
// Components
import SEO from "../components/SEO";
import { Container } from "react-bootstrap";
import { Title } from "../components/globalStyledComponents";

export default function NotFound() {
  const pageTitle = "404";
  return (
    <>
      <SEO title={pageTitle} />
      <main>
        <section className="section">
          <Container className="d-flex">
            <Title>
              <h2>{pageTitle}</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <p>Sorry, page not found...</p>
        </section>
      </main>
    </>
  );
}
