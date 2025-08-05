import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavLink from 'react-bootstrap/esm/NavLink';

const MyNavbar = () => {
    return (

        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">QuizApp</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/jobs">Jobs</Nav.Link>
                        <NavDropdown title="Technologies" id="basic-nav-dropdown">
                            <NavLink as={NavLink} href="/Questionbank" state={{ message: "Java Script" }}>
                                Java Script
                            </NavLink>
                            <NavLink as={NavLink} href="/Questionbank" state={{ message: "React" }}>
                                React
                            </NavLink>
                            <NavLink as={NavLink} href="/Questionbank" state={{ message: "Java" }}>
                                Java
                            </NavLink>
                            <NavLink as={NavLink} href="/Questionbank" state={{ message: "Python" }}>
                                Python
                            </NavLink>
                            <NavLink as={NavLink} href="/Questionbank" state={{ message: "Java Script" }}>
                                Java Script
                            </NavLink>
                            <NavLink as={NavLink} href="/Questionbank" state={{ message: "Dotnet" }}>
                                Dotnet
                            </NavLink>
                            <NavLink as={NavLink} href="/Questionbank" state={{ message: "Angular" }}>
                                Angular
                            </NavLink>
                            <NavLink as={NavLink} href="/Questionbank" state={{ message: "PHP" }}>
                                PHP
                            </NavLink>
                            <NavLink as={NavLink} href="/Questionbank" state={{ message: "MySql" }}>
                                MySql
                            </NavLink>
                            <NavLink as={NavLink} href="/Questionbank" state={{ message: "MongoDB" }}>
                                MongoDB
                            </NavLink>
                           
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/Enquiries">Enquiry</Nav.Link>
                        <Nav.Link href="/AboutUs">About Us</Nav.Link>
                        <NavDropdown title="Login" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/Userlogin">User</NavDropdown.Item>
                            <NavDropdown.Item href="/Adminlogin">Admin</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default MyNavbar;