import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import Card from "react-bootstrap/Card";

function App() {
  const [third, setthird] = useState("Flower of the month:Tulip");
  const [second, setsecond] = useState(
    "Flowers for Events: a full-service concept to any venue worldwide."
  );
  const [first, setfirst] = useState(
    "Nous livrons: directement du producteur à chaque destination dans le monde."
  );
  const [products, setproducts] = useState([
    {
      name: "Tulip",
      img: "https://cdn.britannica.com/37/227037-050-CA792866/Broken-tulip-flower.jpg",
      description:
        "Tulips are a genus of herbaceous plants in the Liliaceae family, which has about 100 species native to warm temperate regions of the Old World.",
    },
    {
      name: "Rose",
      img: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRoZC_JQAsW5rB_YteF6L0u0o94iMUKzkHxa8ibXSoB79pY8mNVv5BnbKehy7mZTEBS",
      description:
        "A rose is either a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over three hundred species and tens of thousands of cultivars.",
    },
    {
      name: "Hydrangea",
      img: "https://cdn.britannica.com/21/137521-050-B20FDFCB/Flower-hydrangea-hortensia-French.jpg",
      description:
        "Hydrangea, commonly named the hortensia, is a genus of over 75 species of flowering plants native to Asia and the Americas. By far the greatest species diversity is in eastern Asia, notably China, Korea, and Japan.",
    },
  ]);
  const [show, setshow] = useState(second);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container fluid style={{ backgroundColor: "#52b958" }}>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Contact</Nav.Link>
              <NavDropdown title="About us" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Reviews</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Mission</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">History</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Services
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel id="action1">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.florca.com/images/layoutentitylinkvalue/63/8dad9e26c2029f0/1920x800/headerbeeld2.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>{first}</h1>
            <Button
              onClick={() =>
                setfirst(
                  "Fleurs pour événements : un concept de service complet pour n'importe quel lieu dans le monde"
                )
              }
              variant="outline-success"
            >
              French
            </Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.florca.com/images/layoutentitylinkvalue/1328/8dad9e26c2029f0/1920x800/Subscribe%20-2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1>{second}</h1>
            <Button
              onClick={() =>
                setsecond(
                  "Fleurs pour événements : un concept de service complet pour n'importe quel lieu dans le monde"
                )
              }
              variant="outline-success"
            >
              French
            </Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.florca.com/images/layoutentitylinkvalue/1360/8daecb24394b720/1920x800/tulp2-2.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>{third}</h1>
            <Button
              onClick={() => setthird("Fleur du mois:Tulipe")}
              variant="outline-success"
            >
              French
            </Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="boutton-parent">
        <Button
          onClick={() => setshow(!show)}
          className="boutton"
          variant="outline-success"
          style={{ backgroundColor: "#52b958" }}
        >
          Discover our products
        </Button>
      </div>

      {show ? (
        <div className="box">
          {products.map((el) => (
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={el.img}
                style={{
                  minWidth: "286px",
                  maxWidth: "286px",
                  minHeight: "308.7px",
                  maxHeight: "308.7px",
                }}
              />
              <Card.Body>
                <Card.Title>{el.name}</Card.Title>
                <Card.Text>{el.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default App;
