import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-light text-dark py-4 mt-5">
            <Container>
                <Row>
                    {/* About Us Section */}
                    <Col md={4}>
                        <h5>Old Book House</h5>
                        <p>Your go-to platform for finding and purchasing second-hand books online.</p>
                    </Col>

                    {/* Quick Links Section */}
                    <Col md={4}>
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/products">Products</Link>
                            </li>
                            <li>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </Col>

                    {/* Social Media Section */}
                    <Col md={4}>
                        <h5>Follow Us</h5>
                        <div className="d-flex">
                            <a href="https://www.facebook.com" className="me-3">
                                <FaFacebookF size={24} />
                            </a>
                            <a href="https://www.twitter.com" className="me-3">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://www.instagram.com" className="me-3">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://www.linkedin.com">
                                <FaLinkedinIn size={24} />
                            </a>
                        </div>
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col className="text-center">
                        <p>&copy; {new Date().getFullYear()} Old Book House. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
