import { Col, Container, Row, Card, Button } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
/* import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json"; */

const AllTheBooks = function () {
  return (
    <Container>
      <Row className="justify-content-center gy-4 cols-2 cols-sm-3 cols-md-4 cols-lg-6">
        {fantasy.map((book) => (
          <Col key={`fantasy-${book.asin}`}>
            <Card className="singleCard">
              <Card.Img className="singleCardImg" src={book.img} />
              <Card.Body className="m-auto">
                <Card.Title className="singleCardTitle text-truncate fs-6">{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
                <Button variant="danger">{book.price} €</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
