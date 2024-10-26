import { useEffect, useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { FaUser, FaMoneyBillWave, FaShoppingCart } from 'react-icons/fa'; // Importing icons
import { useCart } from '../../../CustomHooks/useCart';

const PopularBooks = () => {
    const [books, setBooks] = useState([]);
    const {  addToCart } = useCart();

    useEffect(() => {
        fetch("/popularbooks.json")
            .then((res) => res.json())
            .then((data) => setBooks(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="popular-books p-4 bg-light rounded">
            <h2 className="text-center mb-4 text-primary">Popular Old Books</h2>
            <Row>
                {books.map((book) => (
                    <Col md={4} key={book.id} className="mb-4">
                        <Card className="shadow-sm border-0">
                            <Card.Img variant="top" src={book.imageUrl} className="img-fluid" style={{ height: '200px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title className="text-primary">{book.title}</Card.Title>
                                <Card.Text className="d-flex align-items-center text-secondary">
                                    <FaUser className="me-2" />
                                    {book.author}
                                </Card.Text>
                                <Card.Text className="text-muted">{book.description}</Card.Text>
                                <div className="d-flex justify-content-between align-items-center">
                                    <Card.Text className="d-flex align-items-center font-weight-bold text-success">
                                        <FaMoneyBillWave className="me-2" />
                                        {book.price} USD
                                    </Card.Text>
                                    <Button
                                        onClick={()=>{addToCart(book)}}
                                        variant="primary"
                                        className="d-flex align-items-center">
                                        <FaShoppingCart className="me-1" />
                                        Add to Cart
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default PopularBooks;
