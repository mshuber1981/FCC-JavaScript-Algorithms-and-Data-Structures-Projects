import React from "react";
// https://react-bootstrap.github.io/components/jumbotron/
import { Jumbotron, Button } from "react-bootstrap";
// https://react-icons.netlify.com/#/
import { FaFreeCodeCamp } from "react-icons/fa";

const Home = () => {
  return (
    <section className="container">
      <Jumbotron className="d-flex flex-column vh-100 align-items-center justify-content-center text-center">
        <h1 className="display-4">Welcome!</h1>
        <p className="my-5">
          Thanks for checking out my spin on the{" "}
          <a
            href="https://www.freecodecamp.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            freecodecamp.org
          </a>{" "}
          JavaScript Algorithms and Data Structures Projects.
        </p>
        <a
          href="https://www.freecodecamp.org/mshuber1981"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg">
            <FaFreeCodeCamp className="mr-2" /> FCC Profile
          </Button>
        </a>
      </Jumbotron>
    </section>
  );
};

export default Home;
