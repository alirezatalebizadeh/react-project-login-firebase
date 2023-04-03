import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'
import { Container, Row, Table, Modal, Form } from 'react-bootstrap'
import { AiTwotoneDelete } from 'react-icons/ai'
import { AiFillEdit } from 'react-icons/ai'



export default function User() {
    let navigate = useNavigate()
    let Location = useLocation()

    const [users, setUsers] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [userId, setUserId] = useState('');
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [getData, setGetData] = useState(false)

    //fetch data
    useEffect(() => {
        fetch('https://react-project-80c14-default-rtdb.firebaseio.com/users.json')
            .then(res => res.json())
            .then(data => setUsers(Object.entries(data)))
    }, [users])


    //پر کردن فرم 
    useEffect(() => {
        let mainUser = users.find(user => user[0] == userId)
        if (mainUser) {
            console.log(mainUser);
            setFirstName(mainUser[1].firstName)
            setLastName(mainUser[1].lastName)
            setPassword(mainUser[1].password)
        }

    }, [userId])

    // edit user   
    const submitData = async (event) => {
        event.preventDefault()

        let userNewInfos = {
            firstName,
            lastName,
            password
        }

        await fetch(`https://react-project-80c14-default-rtdb.firebaseio.com/users/${userId}.json`, {
            method: 'PUT',
            body: JSON.stringify(userNewInfos)
        }).then(response => console.log(response))
        setGetData(prev => !prev)
        setShowForm(false)
    }

    //remove user    
    const removeHandler = () => {
        fetch(`https://react-project-80c14-default-rtdb.firebaseio.com/users/${userId}.json`, {
            method: 'DELETE',
        }).then(res => res.json)
            .then(data => setUsers(Object.entries(data)))
        setShowModal(false)
    }


    return (
        <>
            <Container>
                <Row className='mt-3'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr>
                                    <td>{user[1].firstName}</td>
                                    <td>{user[1].lastName}</td>
                                    <td>{user[1].password}</td>
                                    <td style={{ display: 'flex', justifyContent: 'space-around' }}>
                                        <AiTwotoneDelete
                                            onClick={() => {
                                                setShowModal(true)
                                                setUserId(user[0])
                                            }}
                                            style={{ fontSize: '20px', color: 'red', cursor: 'pointer' }} />
                                        <AiFillEdit
                                            onClick={() => {
                                                setShowForm(true)
                                                setUserId(user[0])
                                            }}
                                            style={{ fontSize: '20px', cursor: 'pointer' }} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Row>
                {/* remove modal */}
                <Modal
                    show={showModal}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Delete User
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Are you sure to delete this user?
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => setShowModal(false)}>Close</Button>
                        <Button onClick={() => removeHandler()}>Yes, Delete</Button>
                    </Modal.Footer>
                </Modal>

                {/* edit modal */}
                <Modal
                    show={showForm}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Delete User
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className='text-center d-grid mx-auto' onSubmit={submitData}>

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
                                    type="password"
                                    placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer className='d-gird'>
                        <Button onClick={() => setShowForm(false)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </>

    )
}
