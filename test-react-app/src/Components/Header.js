import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <Navbar bg="dark" variant='dark' expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" style={{ direction: 'rtl' }} />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link>
                            <Link to="/">Home</Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link to="/contact">contact</Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link to="/product">product</Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link to="/user">user</Link>
                        </Nav.Link>

                        <NavDropdown title="news" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">active news</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                        </NavDropdown>
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

    )
}
