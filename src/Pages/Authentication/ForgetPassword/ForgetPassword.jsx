import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';

const ForgetPassword = () => {
    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2 className="text-center">Forgot Your Password?</h2>
                    <p className="text-center">
                        Enter your email address and we will send you instructions to reset your password.
                    </p>

                    <Form>
                        <Form.Group controlId="formBasicEmail" className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <div className="input-group">
                                <Form.Control type="email" placeholder="Enter your email" />
                                <Button variant="outline-secondary" className="input-group-text">
                                    <FaEnvelope />
                                </Button>
                            </div>
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100 mb-3">
                            Send Reset Instructions
                        </Button>

                        <p className="text-center">
                            Remember your password? <Link to="/login">Back to Login</Link>
                        </p>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ForgetPassword;
