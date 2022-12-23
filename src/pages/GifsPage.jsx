import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import Results from "../components/Results/Results";
import SideBar from "../components/SideBar/SideBar";

const GifsPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} sm={4} className="layout bg-success">
          <SideBar/>
        </Col>
        <Col xs={12} sm={8} className="layout bg-warning">
          <Results/>
        </Col>
      </Row>
      <ToastContainer/>
    </Container>
  )
}
 
export default GifsPage;