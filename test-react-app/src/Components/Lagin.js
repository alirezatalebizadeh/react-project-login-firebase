// let inLogin = (name) => {
//     if (name === 'Alireza') {
//         return true
//     }
//     return false
// }


import React, { useState, useEffect } from 'react'
import { Container, Row, Form, Button } from 'react-bootstrap'
import './login.css'


export default function Lagin() {


    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')




    const submitData = (event) => {
        event.preventDefault()
        let newUser = {
            firstName,
            lastName,
            password
        }

        fetch('https://react-project-80c14-default-rtdb.firebaseio.com/users.json', {
            method: 'POST',
            body: JSON.stringify(newUser)
        })
            .then(res => console.log(res))
        // console.log(newUser);
        setFirstName('')
        setLastName('')
        setPassword('')

    }


    return (
        <Container>
            <Row>
                <Form className='text-center d-grid mx-auto mt-5' onSubmit={submitData}>

                    <Form.Group className="mb-3 mb-2" controlId="formBasicEmail">
                        <Form.Label>your name :</Form.Label>
                        <Form.Control
                            onChange={(event) => setFirstName(event.target.value)}
                            value={firstName}
                            type="text"
                            placeholder="your name" />
                    </Form.Group>

                    <Form.Group className="mb-3 mb-2" controlId="formBasicEmail">
                        <Form.Label>your family :</Form.Label>
                        <Form.Control
                            onChange={(event) => setLastName(event.target.value)}
                            value={lastName}
                            type="text"
                            placeholder="your family" />
                    </Form.Group>

                    <Form.Group className="mb-3 mb-2" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            onChange={(event) => setPassword(event.target.value)}
                            value={password}
                            type="passw
                            ord" placeholder="Password" />
                    </Form.Group>

                    <Button className='mt-3' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Row>
        </Container>
    )
}











