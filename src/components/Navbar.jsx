
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/nav';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../images/instacart-logo.svg'


const NavBar = () => {
    
    return (
        <div className="" style={{width: "100%"}}>
            {[false].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                    <Container
                        fill
                        style={{flexWrap: "none"}}>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="start"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Link</Nav.Link>
                                <Nav.Link href="#action1">Link</Nav.Link>
                                <Nav.Link href="#action2">Link</Nav.Link>
                                </Nav>                    
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                        <Navbar.Brand
                            className="align-self-start"
                            style={{ margin: "5px 0 0 20px" }}
                            href="#home"
                        >
                            <img src={Logo} alt="logo" />
                        </Navbar.Brand>
                        <Navbar.Collapse
                            id="basic-navbar-nav"
                            className=""
                            style={{ borderRadius: '10px', margin: "5px 0 0 20px", display: "flex" }}
                        >
                            <Nav className="mr-auto" style={{ margin: "5px 0 0 20px" }}>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Nav>
                            <Nav
                                style={{ color: "white", textDecoration: "none", margin: "5px 0 0 100px", fontSize: "15px", fontWeight: "bold" }}
                            >
                                <Nav.Link
                                    href="#LogIn"
                                >
                                    Log In
                                </Nav.Link>
                            </Nav>
                            <Button
                                variant="success"
                                style={{ borderRadius: '10px', margin: "5px 0 0 20px", fontSize: "15px", fontWeight: "bold" }}
                            >
                                Sign Up
                            </Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>   
            ))}    
        </div>
    )
}

export default NavBar