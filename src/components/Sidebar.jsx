import React from 'react'
import { Bar, TaskButton, Content } from '../css/styledComponents'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <Bar>

            <div>
            <Link to='/'>
                <button>landing</button>
            </Link>
            <Link to='/login'>
                <button>login</button>
            </Link>
            <Link to='/register'>
                <button>register</button>
            </Link>
            </div>

            <div>
            <Content>username</Content>
            <Content>add project</Content>
            <TaskButton>trash</TaskButton>
            </div>
            
            <div>
            <Content>log out</Content>
            </div>

           

        </Bar>
    )
}