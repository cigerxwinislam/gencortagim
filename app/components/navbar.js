// Bismillahirahmanirahim

'use client'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css'

import Nivisyek from './nivisyek'

import Nivisdudu from './nivisdudu'

import Nivissise from './nivissise'



function BrandExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand style={{color:'green',}} href="/"><h6>GENÇ ORTAĞIM</h6></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Anasayfa</Nav.Link>
            <Nav.Link href="#action2">Ayarlar</Nav.Link>
            <NavDropdown title="Bilgilendirme" id="navbarScrollingDropdown">
              <NavDropdown.Item ><Nivisyek/>  </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                <Nivisdudu/> 
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">
               <Nivissise/>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="" disabled>
              Yardım Merkezi
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Ara"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Ara</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BrandExample;