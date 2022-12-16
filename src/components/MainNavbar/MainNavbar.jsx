import { useRef } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainNavbar = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  const items = [
    {key:1,path:'/gifs',name:'Gifs'},
    {key:2,path:'/admin',name:'Administración'},
    {key:3,path:'/stickers',name:'Stickers'},
    {key:4,path:'/games',name:'Juegos'},
  ]
  return ( 
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Multipáginas</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            { 
              user.role === "admin"?
              items.map(item=><Link key={item.key} className="nav-link" to={item.path}>{item.name}</Link>)
              :
              items.map(item=>{
                if(item.path!=='/admin'){
                  return <Link key={item.key} className="nav-link" to={item.path}>{item.name}</Link>
                }
            })
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
export default MainNavbar;