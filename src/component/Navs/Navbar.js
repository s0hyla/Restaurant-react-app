import './Navbar.css'
import {Navbar as BSNavbar, Nav , Container} from 'react-bootstrap';
import logo1 from './../../assets/logo1.png';

function Navbar() {
  return (
    <BSNavbar expand="lg" fixed='top'>
      <Container>
        <BSNavbar.Brand href="#home">
          <img src={logo1} title='logo' alt='Shiny'/> 
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
            <Nav.Link href="#home">Export Foods</Nav.Link>
            <Nav.Link href="#link">Reviews</Nav.Link>
            <Nav.Link href="#link">FAQ </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link id="navLink">266 933 571</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  )
}

export default Navbar;





