import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/')
      .then(res => {
        setProducts(res.data)
        console.log(res)
      })
      .then(err => {
        console.log(err)
      })
  }, [])


  return (
    <>
      <header>
        <Navbar expand="lg" className="bg-body container">
          <img src='https://levi.in/cdn/shop/files/logo_his_res.png?v=1697785388&width=120' style={{ width: "90px" }} />
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">

              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1" className='red-sale'>SALE</Nav.Link>
                <Nav.Link href="#action2">MEN</Nav.Link>
                <Nav.Link href="#action2">WOMEN</Nav.Link>
                <Nav.Link href="#action2">NEW ARRIVALS</Nav.Link>
                <Nav.Link href="#action2">FEATURED</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="What you looking for"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-dark" style={{ width: "80px" }}>Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>
          <Row>
            {products.map((product, index) => {
              return (
                <Col xs={12} sm={6} md={4} lg={4} xl={3} xxl={3}>
                  <Card className=' card mt-3'>
                    <Card.Img variant="top" src={product.image} className='product-image mx-auto d-block' />
                    <Card.Body>
                      <Card.Title className='card-title text-center'>{product.title}</Card.Title>
                      <h3 className='price-tag text-center'>${product.price}</h3>
                      <Card.Text className='product-des text-center'>
                        {product.description}
                      </Card.Text>
                      <Link className="nav-link" to={`/product-details/${product.id}`}>
                        <Button variant="danger" className="mx-auto d-block">View product</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Container>
      </main>
      <hr />
      <footer>
        <p className="footer-sec text-center">
          Copyrights 2024-26. All Rights Reserved.
        </p>
      </footer>
    </>
  )
}

export default App
