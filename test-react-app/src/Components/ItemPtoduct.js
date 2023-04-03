import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap'
import data from './../Datas'
import { Link } from 'react-router-dom'



export default function ItemPtoduct(props) {



    return (
        <>
            <Col className='my-2'>
                <Card style={{ width: '18rem', margin: '0 auto' }}>
                    <Card.Img variant="top" style={{ height: '190px' }} src={props.src} />
                    <Card.Body>
                        <Card.Title className='text-center'>{props.title}</Card.Title>
                        <Card.Text className='text-center'>
                            {props.price}
                        </Card.Text>
                        <Link to={`${props.id}`} className=' d-grid'>
                            <Button variant="primary">buy</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col >
        </>
    );
}
