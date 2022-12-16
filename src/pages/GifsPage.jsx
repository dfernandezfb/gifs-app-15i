import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import Results from "../components/Results/Results";
import SideBar from "../components/SideBar/SideBar";

const GifsPage = () => {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  
  return (
    <Container fluid>
      <Row>
        <Col xs={12} sm={4} className="layout bg-success">
          <SideBar setResults={setResults} search={search} setSearch={setSearch} isSearching={isSearching} setIsSearching={setIsSearching}/>
        </Col>
        <Col xs={12} sm={8} className="layout bg-warning">
          <Results results={results}/>
        </Col>
      </Row>
      <ToastContainer/>
    </Container>
  )
}
 
export default GifsPage;