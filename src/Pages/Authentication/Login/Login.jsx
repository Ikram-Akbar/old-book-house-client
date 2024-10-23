
import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2 className="text-center">Login to Your Account</h2>
                    <p className="text-center">Please login with your email and password or continue with social media</p>

                    <Form>
                        <Form.Group controlId="formBasicEmail" className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <div className="input-group">
                                <Form.Control
                                    type={passwordVisible ? "text" : "password"}
                                    placeholder="Enter password"
                                />
                                <Button
                                    variant="outline-secondary"
                                    onClick={togglePasswordVisibility}
                                    className="input-group-text"
                                >
                                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                                </Button>
                            </div>
                            <Link to="/forget-password" className="d-block mt-2">Forgot password?</Link>
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100 mb-3">
                            Login
                        </Button>

                        <p className="text-center">Or continue with:</p>
                        <div className="d-flex justify-content-between mb-4">
                            <Button variant="outline-danger" className="w-100 me-2">
                                <FaGoogle /> Google
                            </Button>
                            <Button variant="outline-dark" className="w-100 me-2">
                                <FaGithub /> GitHub
                            </Button>
                            <Button variant="outline-primary" className="w-100">
                                <FaFacebookF /> Facebook
                            </Button>
                        </div>

                        <p className="text-center">
                            New here? <Link to="/register">Register for new account</Link>
                        </p>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginForm;
