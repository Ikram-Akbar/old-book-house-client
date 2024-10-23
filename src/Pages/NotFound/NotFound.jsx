import { Container, Button } from 'react-bootstrap';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container className="text-center mt-5">
            <FaExclamationTriangle size={80} className="text-warning mb-3" />
            <h1>404 - Page Not Found</h1>
            <p>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
            <Link to="/">
                <Button variant="primary">Go Back to Homepage</Button>
            </Link>
        </Container>
    );
};

export default NotFound;
