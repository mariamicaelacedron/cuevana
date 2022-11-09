import "./CardComponent.css"
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function CardComponent(props) {
    return (
        <div >
            <Card  style={{ width: '14rem' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                      {props.description}
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </div>
    )
}
export default CardComponent;

