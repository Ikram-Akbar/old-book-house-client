import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaShoppingCart, FaSignInAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/products", label: "Products" },
        { path: "/about", label: "About" },
        { path: "/contact", label: "Contact" },
    ];

    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>Old Book House</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        {navLinks.map((link) => (
                            <LinkContainer key={link.path} to={link.path}>
                                <Nav.Link as={NavLink}>{link.label}</Nav.Link>
                            </LinkContainer>
                        ))}
                    </Nav>
                    <Nav className="ms-auto">
                        <LinkContainer to="/my-cart">
                            <Nav.Link  as={NavLink}>
                                <FaShoppingCart className='mx-3' />
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <Button variant="outline-primary" as={NavLink}>
                                <FaSignInAlt className='mx-2' />
                                Login</Button>
                        </LinkContainer>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
