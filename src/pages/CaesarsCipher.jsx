import React from "react";
// Components
import { Container } from "react-bootstrap";
import { Title } from "../components/globalStyledComponents";

export default function CaesarsCipher() {
  return (
    <>
      <main>
        <section className="section">
          <Container className="d-flex">
            <Title>
              <h2>Caesars Cipher</h2>
              <div className="underline"></div>
            </Title>
          </Container>
        </section>
      </main>
    </>
  );
}
