import { Col, Container, Row, Card, Button } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
/* import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json"; */

const AllTheBooks = function () {
  return (
    <Container>
      <Row className="justify-content-center gy-4 cols-2 cols-md-3 cols-lg-4">
        {fantasy.map((book) => (
          <Col key={`fantasy-${book.asin}`}>
            <Card className="singleCard">
              <Card.Img className="singleCardImg" src={book.img} />
              <Card.Body className="text-center">
                <Card.Title className="singleCardTitle text-truncate">{book.title}</Card.Title>
                <Card.Text className="singleCardText">{book.category}</Card.Text>
                <Button className="singleCardButton" variant="danger">
                  {book.price} €
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
