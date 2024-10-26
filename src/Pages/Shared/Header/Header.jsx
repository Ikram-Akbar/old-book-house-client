import { Navbar, Nav, Container, Button } from "react-bootstrap";
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
                <NavLink to="/" className="navbar-brand">
                    Old Book House
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    isActive ? "nav-link font-bold text-primary" : "nav-link text-bold"
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </Nav>

                    <Nav className="ms-auto">
                        <NavLink to="/my-cart" className="nav-link">
                            <FaShoppingCart className="mx-3" />
                        </NavLink>
                        {user ? (
                            <>
                                <Button onClick={toggleProfile} variant="outline-primary">
                                    <FaUser className="mx-2" />
                                    Profile
                                </Button>
                                {showProfile && <ProfileCard />}
                            </>
                        ) : (
                            <NavLink to="/login">
                                <Button variant="outline-primary">
                                    <FaSignInAlt className="mx-2" />
                                    Login
                                </Button>
                            </NavLink>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
