import { Card, Button } from 'react-bootstrap';

const ModernCard = () => {
    return (
        <Card style={{ width: '20rem', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <Card.Img
                variant="top"
                src="https://via.placeholder.com/400x200"
                style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body style={{ padding: '20px' }}>
                <Card.Title style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '10px' }}>Modern Card</Card.Title>
                <Card.Text style={{ color: '#555', marginBottom: '15px' }}>
                    This is a sleek and modern card design. Perfect for showcasing content in a stylish way.
                </Card.Text>
                <Button variant="dark" style={{ width: '100%', borderRadius: '30px' }}>
                    Learn More
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ModernCard;
