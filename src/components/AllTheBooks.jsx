import { Col, Container, Row, Card, Button } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
/* import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json"; */

const AllTheBooks = function () {
  return (
    <Container>
      <Row xs={1} sm={2} md={3} lg={4} xxl={6} className="justify-content-center gy-4">
        {fantasy.map((book) => (
          <Col key={`fantasy-${book.asin}`}>
            <Card className="singleCard">
              <Card.Img className="singleCardImg" variant="top" src={book.img} />
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
