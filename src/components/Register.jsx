import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Div, Title } from '../css/styledComponents'
import Header from './Header'

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
`
const StyledSpan = styled.span`
font-size: 1.5rem
font-weight: 200`

class Register extends React.Component {
    state = {
        username: '',
        password1: '',
        pasword2: ''
    }


    handleChange = (key, value) => {
        // console.log(key, value)
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
        console.log(password)
        axios.post('/auth/register', { username, password })
        .then(res => this.props.updateUser(res.data.username))
    }

    render() {


        return (
            <Div>
                <Header />
                <Section>
                    <Title>Register</Title>


                    <div>
                        <StyledSpan>Username: </StyledSpan>
                        <input 
                        onChange={e => this.handleChange('username', e.target.value)}
                        type="text" />
                    </div>
                    <br />

                    <div>
                        <StyledSpan>Password: </StyledSpan>
                        <input 
                        onChange={e => this.handleChange('password1', e.target.value)}
                        type="text" />
                    </div>

                    <br />
                    <div>
                        <StyledSpan>Re-enter Password: </StyledSpan>
                        <input 
                        onChange={e => this.handleChange('password2', e.target.value)}
                        type="text" />
                    </div>

                    <br />

                    {/* make ternary... after register, login button appears */}

                    <button
                    onClick={this.register}>Register</button>

                    
                    <Link to='/dash'>
                        <button>Login</button>
                    </Link>

                </Section>

            </Div>
        )
    }
}

export default Register