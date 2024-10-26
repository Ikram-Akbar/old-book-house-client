import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => (
    <Container className="py-5">
        <Row className="align-items-center">
            <Col md={6}>
                <Image src="path-to-image.jpg" fluid rounded />
            </Col>
            <Col md={6}>
                <h2>About Us</h2>
                <p>
                    We are dedicated to providing exceptional services with a focus on
                    quality, innovation, and customer satisfaction. Our team is composed of
                    skilled professionals who strive to deliver the best experiences to our clients.
                </p>
                <p>
                    Our mission is to make a positive impact through our services and create value
                    for all our customers. We welcome you to join us on this journey of excellence.
                </p>
            </Col>
        </Row>
    </Container>
);

export default About;
