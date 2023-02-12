import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
// Icons
import { Icon } from "@iconify/react";
import { Button, Modal } from "react-bootstrap";

const StyledCodeModal = styled.div`
  .code-icon {
    line-height: 0;
    font-size: 2.75rem;
    transition: var(--transition);
    color: ${({ theme }) => theme.color};

    &:hover {
      cursor: pointer;
      color: rgb(var(--bs-success-rgb));
    }
  }
`;

const propTypes = { code: PropTypes.string };

const defaultProps = {
  code: `
function yourFunction(param) {
  return param;
}
`,
};

const CodeModal = ({ code }) => {
  const [show, setShow] = React.useState(false);
  const [isCoppied, setCoppied] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <StyledCodeModal>
      <div title="See the code" onClick={handleShow}>
        <Icon icon="mdi:code-braces-box" className="my-4 code-icon" />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <pre>
            <code>{code}</code>
          </pre>
        </Modal.Body>
        <Modal.Footer>
          {isCoppied ? (
            <Button
              variant="success"
              onClick={function () {
                // Copy color to clipboard
                navigator.clipboard.writeText(code);
              }}
            >
              Coppied
            </Button>
          ) : (
            <Button
              variant="secondary"
              onClick={function () {
                // Copy color to clipboard
                navigator.clipboard.writeText(code);
                setCoppied(true);
                setTimeout(() => {
                  setCoppied(false);
                }, "5000");
              }}
            >
              Copy
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </StyledCodeModal>
  );
};

CodeModal.propTypes = propTypes;
CodeModal.defaultProps = defaultProps;

export default CodeModal;
