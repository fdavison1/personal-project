import React from 'react'
import { Bar } from '../css/styledComponents'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <Bar>

            <h1>Sidebar.jsx</h1>
            <Link to='/'>
                <button>landing</button>
            </Link>
            <br />
            <Link to='/login'>
                <button>login</button>
            </Link>
            <br />
            <Link to='/register'>
                <button>register</button>
            </Link>
           

        </Bar>
    )
}