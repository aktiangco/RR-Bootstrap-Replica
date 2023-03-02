
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button'
import Logo from '../images/instacart-logo.svg'

const NavBar = () => {

    return (
        <div>
            <Navbar bg="light" expand="lg" >
                <Container style={{ borderRadius: '10px', margin: "5px", display: "flex"}}>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#Department">
                            Department
                        </NavDropdown.Item>
                        <br />
                        <NavDropdown.Item href="#more">
                            More ways to shop
                        </NavDropdown.Item>
                        <br/>
                        <NavDropdown.Item href="#help">
                            Help
                        </NavDropdown.Item>

                    </NavDropdown> */}
                    <Navbar.Brand
                        style={{ margin: "5px 0 0 20px" }}
                        href="#home"
                    >
                        <img src={Logo} alt="logo"/> 
                    </Navbar.Brand>
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        style={{ borderRadius: '10px', margin: "5px", display: "flex" }}>
                        <Nav className="mr-auto" style={{margin: "5px" }}>
                            <input placeholder='search here'></input>
                        </Nav>
                        <Nav > 
                            <Nav.Link
                                href="#LogIn"
                                style={{ color: "white", textDecoration: "none", margin: "4px", fontSize: "18px", fontWeight: "bold"}}
                            >
                                Log In
                            </Nav.Link>
                            
                            <Button
                                variant="Success"
                                style={{ borderRadius: '10px', margin: "4px", fontSize: "18px", fontWeight: "bold"}}
                            >
                                Sign Up
                            </Button>{' '}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>

        </div>
    )
}

export default NavBar