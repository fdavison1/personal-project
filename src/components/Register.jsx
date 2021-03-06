import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateUsername } from '../dux/reducer'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Title } from '../css/styledComponents'
import Header from './Header'
import Footer from './Footer'

const Section = styled.div`
border: 1px solid lightgray
border-radius: 3px
background: lightgray
width: 600px
height: 300px
display: flex
align-items: center
justify-content: center
margin: 100px auto
flex-direction: column
@media (max-width: 500px){
    width: 350px
}`

const StyledSpan = styled.span`
font-size: 1.5rem
font-weight: 200`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }`
    
const Title2 = styled.p`
font-size: 3rem
font-weight: 200
&:hover {
    font-weight: 500
} `

const PageContainer = styled.div`
height: 100vh
position: relative`

const SectionContainer = styled.div`
padding-bottom: 100px
display: flex
align-items: center`

class Register extends React.Component {
    state = {
        username: '',
        password1: '',
        pasword2: ''
    }

    handleChange = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    register = () => {
        const { password1, password2 } = this.state
        //ensure passwords match
        if (password1 !== password2){
            alert('passwords do not match')
        }

        const { username, password1:password } = this.state
        localStorage.setItem('username', username)
        axios.post('/auth/register', { username, password })
        .then(res => {
            this.props.updateUsername(res.data.user.username)
            localStorage.setItem('userID', res.data.user.userID)
            })
            console.log(localStorage.getItem('userID'))
    }

    logout(){
        axios.delete('/auth/logout').then(res => {
            this.props.updateUsername('')
        })
    }

    render() {


        return (
            <PageContainer>
                <Header />
                <SectionContainer>

                <Section>
                {!this.props.username && 
                    <Title>Register</Title>}
                    <br/>
                    
                     
                    {!this.props.username && 
                    <div>

                        <StyledSpan>Username: </StyledSpan>
                        <input 
                        onChange={e => this.handleChange('username', e.target.value)}
                        type="text" />
                    <br /><br/>
                    </div>}

                    {!this.props.username && 
                    <div>
                        <StyledSpan>Password: </StyledSpan>
                        <input 
                        onChange={e => this.handleChange('password1', e.target.value)}
                        type="password" />
                    <br /><br/>
                    </div>}


                    {!this.props.username && 
                    <div>
                        <StyledSpan>Re-enter Password: </StyledSpan>
                        <input 
                        onChange={e => this.handleChange('password2', e.target.value)}
                        type="password" />

                    </div>}

                        <br/>
                    {!this.props.username && 
                    <button
                    onClick={this.register}>Register</button>
                }

                    {this.props.username &&
                    <div>
                    <StyledLink to='/dash'>
                        <Title2>Login as {this.props.username}</Title2>
                    </StyledLink>
                    
                    
                    <button
                    onClick={() => this.logout()}
                    >cancel</button>
                    </div>
                    }

                </Section>
                    </SectionContainer>
                <Footer />
            </PageContainer>
        )
    }
}

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps, {updateUsername})(Register)