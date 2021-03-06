import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateUsername } from '../dux/reducer'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Swal from 'sweetalert2'
import { Content } from '../css/styledComponents'

const SideBar = styled.div`
width: 300px
display: flex
position: fixed
top: 80px
flex-direction: column
align-items: center
justify-content: space-between
z-index: 10
@media (max-width: 500px){
    height: 150px
    width: 100vw
    z-index: 1
    background: #c2dde6
    position: fixed
    top: 0
    position: sticky
    opacity: .95
    flex-direction: row
    border-bottom: 2px solid #999999
}`

const StyledLink = styled(Link)`
text-decoration: none
color: black
&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
}`

export const Content2 = styled.h1`
font-size: 1.5rem
margin: 0
padding: 0
font-weight: 600
@media (max-width: 500px){
    display: flex
    width: 100vw
    justify-content: space-evenly
    flex-direction: row
}`

function Sidebar(props) {
    const logout = () => {
        axios.delete('/auth/logout').then(res => {
            Swal.fire(
                res.data.message,
                'log out successful',
                'success')
            props.updateUsername('')
        })
        localStorage.clear()
    }
    ///////
    const myList = async () => {
        await props.allListsFalse()
        props.getProjects()
    }

    const allLists = async () => {
        await props.allListsTrue()
        props.getProjects()
    }
    return (
        <SideBar>

            <div>

                <Content2
                >{localStorage.getItem('username')}</Content2>

                <Content
                    onClick={() => myList()}
                >my list</Content>

                <Content
                    onClick={() => allLists()}
                >all lists</Content>

                <StyledLink to='/'>
                    <Content
                        onClick={() => logout()}
                    >log out</Content>
                </StyledLink>
            </div>

        </SideBar>
    )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, { updateUsername })(Sidebar)