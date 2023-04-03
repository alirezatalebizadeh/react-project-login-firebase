import React from 'react'
import inLogin from './Lagin'
import Dashboard from './Dashboard'
import { Navigate } from 'react-router-dom'


export default function Panel() {
    let isLoginUser = inLogin('Alireza')


    console.log(isLoginUser);
    return (
        <>
            {!isLoginUser ? (
                <h2>
                    شما نمیتونید وارد بشید
                </h2>
            ) : (
                // <Navigate to='/' />
                <Dashboard />
            )}
        </>
    )
}

