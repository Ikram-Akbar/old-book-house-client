import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FaShoppingCart, FaSignInAlt, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import ProfileCard from "../../../HelperComponents/ProfileCard";

const Header = () => {
    const { user } = useContext(AuthContext);
    const [showProfile, setShowProfile] = useState(false);

    const toggleProfile = () => setShowProfile(!showProfile);
    console.log(user);
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
                            <Nav.Link as={NavLink}>
                                <FaShoppingCart className="mx-3" />
                            </Nav.Link>
                        </LinkContainer>
                        {user ? (
                            <>
                                <Button onClick={toggleProfile} variant="outline-primary">
                                    <FaUser className="mx-2" />
                                    Profile
                                </Button>
                                {showProfile && <ProfileCard />}
                            </>
                        ) : (
                            <LinkContainer to="/login">
                                <Button variant="outline-primary" as={NavLink}>
                                    <FaSignInAlt className="mx-2" />
                                    Login
                                </Button>
                            </LinkContainer>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
