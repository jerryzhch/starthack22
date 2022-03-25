import React from "react";
import { Block, Row, Col } from "framework7-react";

const Navbar = () => {
  return (
    <Block className="navbar-custom">
      <Row className="navbar-row">
        <Col width="33" className="avatar-row">
          <img src="../assets/pngegg.png" alt="avatar" className="avatar-pic" height={"100"} />
          <div className="avatar-name">Me</div>
        </Col>
        <Col width="33" className="chat-request">
          <div>Chat request</div>
          <div className="chat-request-container">Test</div>
        </Col>
        <Col width="33" className="my-rating">
          <div>My rating</div>
          <div className="my-rating-container">Test</div>
        </Col>
      </Row>
    </Block>
  );
};

export default Navbar;
