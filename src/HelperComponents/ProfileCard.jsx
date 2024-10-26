// ProfileCard.js
import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { AuthContext } from "../provider/AuthProvider";


const ProfileCard = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <Card style={{ position: "absolute", top: "100%", right: 0, width: "300px", zIndex: 1 }}>
            <Card.Body className="text-center">
                <Card.Img  className="w-25 rounded-circle center " src={user.photoURL} />
                <Card.Title>{user.displayName}</Card.Title>
                <Card.Text>Email: {user.email}</Card.Text>
                <Button variant="danger" onClick={()=>{logOut()}}>Logout</Button>
            </Card.Body>
        </Card>
    );
};

export default ProfileCard;
