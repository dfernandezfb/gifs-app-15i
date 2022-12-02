import { Col, Container, Row } from "react-bootstrap"
import Results from "./components/Results/Results"
import SideBar from "./components/SideBar/SideBar"

function App() {
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
    </Container>
  )
}

export default App

// Ynwg8SNkFbWkzBg1io7Lh8t7viv7Mg8K --> API KEY