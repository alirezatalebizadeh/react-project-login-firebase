import React from 'react'
import Sclorer from './Sclorer'
import { Container, Row } from 'react-bootstrap'



export default function Home() {
    return (
        <Container className='my-3' >
            <Row>
                <Sclorer />
            </Row>
        </Container>
    )
}
