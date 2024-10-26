import { Container, Row, Col, Button, ListGroup, Image } from 'react-bootstrap';
import { useCart } from '../../CustomHooks/useCart';
import { FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa';

const UserCart = () => {
    const { cart, removeFromCart, updateQuantity } = useCart();

    // Calculate total price based on quantity
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

    const handleQuantityChange = (id, newQuantity) => {
        if (newQuantity > 0) {
            updateQuantity(id, newQuantity);
        }
    };

    return (
        <Container className="my-5">
            <Row>
                <Col md={8}>
                    <h3>Shopping Cart ({cart.length})</h3>
                    {cart.length > 0 ? (
                        <ListGroup variant="flush">
                            {cart.map((item, index) => (
                                <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <Image src={item.imageUrl} alt={item.title} rounded style={{ width: '80px', height: '80px', objectFit: 'cover', marginRight: '15px' }} />
                                        <div>
                                            <h5 className="mb-1">{item.title}</h5>
                                            <p className="mb-1">${item.price} each</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <Button variant="outline-secondary" size="sm" onClick={() => handleQuantityChange(item.id, item.quantity - 1)} disabled={item.quantity === 1}>
                                            <FaMinus />
                                        </Button>
                                        <span className="mx-2">{item.quantity}</span>
                                        <Button variant="outline-secondary" size="sm" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                                            <FaPlus />
                                        </Button>
                                    </div>
                                    <Button onClick={() => removeFromCart(item.id)} variant="danger" size="sm" className="ms-3">
                                        <FaTrashAlt /> Remove
                                    </Button>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    ) : (
                        <p>Your cart is empty. Start adding items!</p>
                    )}
                </Col>
                <Col md={4}>
                    <div className="p-4 bg-light rounded shadow-sm">
                        <h4>Order Summary</h4>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <span>Total Price:</span>
                            <strong>${totalPrice}</strong>
                        </div>
                        <Button variant="primary" className="w-100 mt-4">Proceed to Checkout</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default UserCart;
