import { useEffect, useState } from "react";
import { Col, Container, Row, ToastContainer } from "react-bootstrap";
import Results from "../components/Results/Results";
import SideBar from "../components/SideBar/SideBar";
import axiosInstance from "../config/axios";

const GifsPage = () => {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  const doSearch = async()=>{
    try {
      const {data} = await axiosInstance.get(`/search?api_key=${import.meta.env.VITE_APP_GIPHY_API_KEY}&q=${search}`);
      setResults(data.data);
      setLoading(false);
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(()=>{
    doSearch()
},[search])
  return (
    
    <Container fluid>
      <Row>
        <Col xs={12} sm={4} className="layout bg-success">
          <SideBar search={search} setSearch={setSearch}/>
        </Col>
        <Col xs={12} sm={8} className="layout bg-warning">
          <Results results={results} loading={loading} setLoading={setLoading}/>
        </Col>
      </Row>
      <ToastContainer/>
    </Container>
  )
}
 
export default GifsPage;