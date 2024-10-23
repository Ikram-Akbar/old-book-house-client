import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2 className="text-center">Create a New Account</h2>
                    <p className="text-center">Fill in the details below to register or sign up using social media</p>

                    <Form>
                        <Form.Group controlId="formBasicName" className="mb-3">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your full name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail" className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPhone" className="mb-3">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="tel" placeholder="Enter your phone number" />
                        </Form.Group>

                        <Form.Group controlId="formPhotoURL" className="mb-3">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control type="url" placeholder="Enter your photo URL" />
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
                        </Form.Group>

                        <Form.Group controlId="formConfirmPassword" className="mb-3">
                            <Form.Label>Confirm Password</Form.Label>
                            <div className="input-group">
                                <Form.Control
                                    type={confirmPasswordVisible ? "text" : "password"}
                                    placeholder="Confirm your password"
                                />
                                <Button
                                    variant="outline-secondary"
                                    onClick={toggleConfirmPasswordVisibility}
                                    className="input-group-text"
                                >
                                    {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                                </Button>
                            </div>
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100 mb-3">
                            Register
                        </Button>

                        <p className="text-center">Or sign up with:</p>
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
                            Already have an account? <Link to="/login">Login here</Link>
                        </p>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;
