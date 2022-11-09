import "./HomePage.css"
import Users from "./Users/Users";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function HomePage() {
   const { onChangeInput, SearchMovie } = Users();

   return (

      <div className="search d-flex justify-content-end pt-4">


         <Navbar className="search1" expand="lg">
            <Container fluid>
            
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">
                  <Nav
                     className="me-auto my-2 my-lg-0"
                     style={{ maxHeight: '100px' }}
                     navbarScroll
                  >
                     
                     <NavDropdown title="Link" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Comedia</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Accion
                        </NavDropdown.Item>
              
                        <NavDropdown.Item href="#action5">
                           Familiares
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action6">Suspenso</NavDropdown.Item>
                        <NavDropdown.Item href="#action7">Terror</NavDropdown.Item>
                     </NavDropdown>
                     
                  </Nav>
                  <Form className="d-flex">
                     <Form.Control
                        type="text"
                        className="form-control me-2"
                        onChange={onChangeInput}
                        placeholder="Busque su pelicula"

                        aria-label="Search"
                     />
                     <Button variant="outline-success" onClick={SearchMovie}>Search</Button>
                  </Form>
               </Navbar.Collapse>
            </Container>
         </Navbar>



      </div>
   )
}
export default HomePage;