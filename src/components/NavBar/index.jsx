import react from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

export default function NavBarComponent (){
  const handleSubmit = ()=>{
    console.log("hola desde handleSubmit")
  }
    return(
            <Navbar bg="dark" data-bs-theme="dark">
              <Container>
                <Navbar.Brand href="#home">App</Navbar.Brand>
                <Nav className="me-auto">
                  <NavLink className="nav-link" to="/home" onClick={()=>handleSubmit()}>Home</NavLink>
                  <NavLink className="nav-link" to="/productos">Productos</NavLink>
                  <NavLink className="nav-link" to="/pedidos">Pedidos</NavLink>
                  <NavLink className="nav-link" to="/clientes">Clientes</NavLink>
                </Nav>
              </Container>
            </Navbar>
            
    )
  }