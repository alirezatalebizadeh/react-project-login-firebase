import React, { useState, useEffect } from 'react'
import ItemPtoduct from './ItemPtoduct'
import data from './../Datas'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'



export default function Product() {

    const [products, setProducts] = useState(data)

    return (
        <>
            <Container className='my-2' >
                <Row className='mt-5' style={{ flexWrap: 'wrap' }}>
                    {products.map(product => (
                            <ItemPtoduct key={product.id} {...product}></ItemPtoduct>
                    ))}
                </Row>
            </Container >
        </>
    )
}
