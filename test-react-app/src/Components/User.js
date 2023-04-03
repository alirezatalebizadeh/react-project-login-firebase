import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'


export default function User() {
    let navigate = useNavigate()
    let Location = useLocation()

    console.log(Location);
    return (

        <Container>
            <Row className='d-grid'>
                <Button onClick={() =>
                    navigate('/login')
                    // navigate(-2)
                }
                >click to go login page</Button>
            </Row>
        </Container>

    )
}
