import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateUsername } from '../dux/reducer'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Content } from '../css/styledComponents'

const SideBar = styled.div`
height: 100vh
background: lightgray
width: 300px
display: flex
flex-direction: column
align-items: center
justify-content: space-between`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

function Sidebar(props) {
    const logout = () => {
        axios.delete('/auth/logout').then(res => {
            console.log('fred')
            props.updateUsername('')
        })
    }
    // console.log(props.username)
    return (
        <SideBar>

            <div>

            <Content>{props.username}</Content>

            <Content>all lists</Content>
            <StyledLink to='/'>
            <Content
            onClick={()=> logout()}
            >log out</Content>
            </StyledLink>
            </div>



            

           

        </SideBar>
    )
}

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps, {updateUsername})(Sidebar)