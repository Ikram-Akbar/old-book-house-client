import { Col, Container, Row } from "react-bootstrap";
import Hero from "./Hero/Hero";



const Home = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col >
                        <Hero/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;