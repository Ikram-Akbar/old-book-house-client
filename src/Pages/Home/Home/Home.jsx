import { Col, Container, Row } from "react-bootstrap";
import Hero from "../Hero/Hero";
import PopularBooks from "../PopularBooks/PopularBooks";
import BooksByCategories from "../BooksByCategories/BooksByCategories";
import ModernCard from "../BooksByCategories/ModernCard";



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

                <ModernCard/>
            </Container>
        </>
    );
};

export default Home;