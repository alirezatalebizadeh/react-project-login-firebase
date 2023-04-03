import React, { useState } from 'react'
import ItemPtoduct from './ItemPtoduct'
import { useParams, Navigate } from 'react-router-dom'
import data from './../Datas'
import { Container, Row, Col } from 'react-bootstrap'


export default function MainProduct() {
    let params = useParams()

    let isProduct = data.some(product => product.id == params.productId)
    let mainProduct = data.find(product => product.id == params.productId)


    return (
        <>
            {
                isProduct ? (
                    <Container>
                        <Row className='mt-5'>
                            <Col>
                                <ItemPtoduct style={{ margin: 'auto' }} {...mainProduct}></ItemPtoduct >
                            </Col>
                            <Col>
                                lorem In publishing and graphic design, Lorem ipsum is a placeholder text
                                commonly used to demonstrate the visual form of a document or a typeface withou
                                t relying on meaningful content. Lorem ipsum may be used as a placeholder before
                                final copy is available. It is also used to temporarily
                                replace text in a process called greeking, which allows designers to consider
                            </Col>
                        </Row>
                    </Container>
                ) :
                    (
                        <Navigate to='/' />
                    )
            }
        </>

    )
}
