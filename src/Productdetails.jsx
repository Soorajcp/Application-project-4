import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

function Productdetails() {

    const { product_id } = useParams();

    const [viewProduct, setViewProduct] = useState({})

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${product_id}`)
            .then((res) => {
                setViewProduct(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <>
            <Container>
                <Row>
                    <div className='details-items'>
                        <Col xs={12} sm={6} md={4} lg={4} xl={3} xxl={2}>
                            <img variant="top" src={viewProduct.image} className='product-image mx-auto d-block' />
                            <h2 className='card-title text-center'>{viewProduct.title}</h2>
                            <h3 className='price-tag text-center'>${viewProduct.price}</h3>
                            <p className='product-des-det text-center'>
                                {viewProduct.description}
                            </p>
                        </Col>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Productdetails