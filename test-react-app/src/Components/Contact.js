import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Link ,Outlet} from 'react-router-dom'
import Button from 'react-bootstrap/Button';




export default function Contact() {
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>well come to my page</h1>
            <Link to='setting' className='d-grid'>
                <Button>Setting</Button>
            </Link>
            <Link to='dashboard' className='d-grid mt-3'>
                <Button>Dashboard</Button>
            </Link>
            <Outlet />
        </>
    )
}
