import { useEffect, useState } from "react";
import { Nav, Card, Row, Col, Button } from "react-bootstrap";
import { FaTag, FaDollarSign, FaCartPlus } from "react-icons/fa"; // Icons

const BooksByCategories = () => {
    const [categories, setCategories] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState("all");

    useEffect(() => {
        fetch("/promotionAndDiscount.json")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCategories(data);

                // Extract genres dynamically and include "all" for showing all books
                const uniqueGenres = ["all", ...new Set(data.map(book => book.genre))];
                setGenres(uniqueGenres);
            });
    }, []);

    // Filter books based on selected genre
    const filteredBooks = selectedGenre === "all"
        ? categories
        : categories.filter(book => book.genre === selectedGenre);

    return (
        <div className="mt-5">
            <h1 className="text-center mb-4">Total Books: {filteredBooks.length}</h1>

            {/* Genre Navigation Tabs */}
            <Nav
                fill
                variant="tabs"
                defaultActiveKey="all"
                onSelect={(selectedKey) => setSelectedGenre(selectedKey)}
                className="justify-content-center mb-4"
            >
                {genres.map((genre, index) => (
                    <Nav.Item key={index}>
                        <Nav.Link eventKey={genre} className="text-capitalize">
                            {genre}
                        </Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>

            {/* Book Cards */}
            <Row className="mt-4">
                {filteredBooks.map((book, index) => (
                    <Col md={6} lg={4} key={index} className="mb-4">
                        <Card className="h-100 shadow-sm">
                            <Row className="g-0">
                                <Col md={5} className="">
                                    {/* Book Image */}
                                    <Card.Img
                                       
                                        src={book.imageUrl}
                                        alt={book.title}
                                        style={{
                                            objectFit: 'cover',                
                                        }}
                                    />
                                </Col>
                                <Col md={7}>
                                    <Card.Body className="d-flex flex-column justify-content-between">
                                        <div>
                                            <Card.Title className="fw-bold mb-2">{book.title}</Card.Title>
                                            <Card.Text className="text-muted mb-1">
                                                {book.author}
                                            </Card.Text>
                                            <Card.Text className="small mb-1">
                                                <FaTag className="me-1" /> Genre: {book.genre}
                                            </Card.Text>
                                            <Card.Text className="small mb-1">
                                                <FaDollarSign className="me-1" /> Regular Price: ${book.regularPrice}
                                            </Card.Text>
                                            {book.isOnSale && (
                                                <Card.Text className="small text-danger">
                                                    <FaDollarSign className="me-1" /> Discount Price: ${book.discountPrice}
                                                </Card.Text>
                                            )}
                                        </div>
                                        {/* Add to Cart Button */}
                                        <Button variant="primary" className="mt-3 w-100">
                                            <FaCartPlus className="me-2" /> Add to Cart
                                        </Button>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default BooksByCategories;
