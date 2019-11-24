import React from 'react'
import { Bar, Content } from '../css/styledComponents'
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
            <Content>---username---</Content>
            <Content>all lists</Content>
            <Content>log out</Content>
            </div>

            <div>
            {/* <Content>add project</Content> */}
            </div>
            
            <div>
            </div>

           

        </Bar>
    )
}