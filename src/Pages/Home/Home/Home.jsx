import { Col, Container, Row } from "react-bootstrap";
import Hero from "../Hero/Hero";
import PopularBooks from "../PopularBooks/PopularBooks";
import BooksByCategories from "../BooksByCategories/BooksByCategories";



const Home = () => {


    return (
        <>
            <Container>
                <Row>
                    <Col >
                        <Hero />

                    </Col>
                </Row>
                <Row>
                    <PopularBooks />
                </Row>
                <Row>
                    <BooksByCategories/>
                </Row>
            </Container>
        </>
    );
};

export default Home;