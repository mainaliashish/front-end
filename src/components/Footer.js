import React from "react";

import { Container, Row, Col } from 'react-bootstrap';


function Footer(params) {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; e-commerce</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
