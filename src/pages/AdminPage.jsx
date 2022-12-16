import { Col, Container, Row, Spinner } from "react-bootstrap";
import GeneralTable from "../components/GeneralTable/GeneralTable";
import {axiosBack}from "../config/axios";
import useGet from "../hooks/useGet";

const AdminPage = () => {
  const [users, loading] = useGet('/users',axiosBack)
  // const [users, setUsers] = useState([]);
  // const getUsers = async()=>{
  //   try {
  //     const {data} = await axiosBack.get('/users');
  //     setUsers(data)
  //   } catch (error) {
  //     toast.error('Error. Intente de nuevo en unos minutos.')
  //   }
  // }

  // useEffect(()=>{
  //   getUsers();
  // },[])

  return ( 
    <Container>
      <h1>Página de administración</h1>
      <Row>
        <Col>
          {
          loading?
            <Spinner/>
          :
            <GeneralTable headings={['id','Nombre','Rol']} items={users}></GeneralTable>
          }
        </Col>
      </Row>
    </Container>
   );
}
 
export default AdminPage;