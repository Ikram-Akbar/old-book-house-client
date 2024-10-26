import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => (
    <Container className="py-5">
        <h2>Contact Us</h2>
        <Form>
            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Write your message" />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
                Send Message
            </Button>
        </Form>
    </Container>
);

export default Contact;