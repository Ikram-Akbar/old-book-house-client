import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import { useCart } from '../../CustomHooks/useCart';

const UserCart = () => {
    const { cart,removeFromCart } = useCart();


    // Calculate total price
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <Container>
            <Row className="my-5">
                <Col md={8}>
                    <h3>Shopping Cart { cart.length}</h3>
                    <ListGroup variant="flush">
                        {cart.map((item, index) => (
                            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h5>{item.title}</h5>
                                    <p>${item.price}</p>
                                </div>
                                <Button onClick={()=>{removeFromCart()}} variant="danger" size="sm">Remove</Button>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
                <Col md={4}>
                    <div className="p-3 bg-light rounded">
                        <h4>Order Summary</h4>
                        <hr />
                        <p className="d-flex justify-content-between">
                            <span>Total Price:</span>
                            <strong>${totalPrice}</strong>
                        </p>
                        <Button variant="primary" className="w-100 mt-3">Proceed to Checkout</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default UserCart;
