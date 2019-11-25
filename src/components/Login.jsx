import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Div, Title } from '../css/styledComponents'
import { updateUsername } from '../dux/reducer'
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

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    login(){
        const { username, password } = this.state
        axios.post('/auth/login', { username, password } )
        .then(res => {
            console.log('res')
            this.props.updateUsername(res.data.user)
            //link to dash....
            this.props.history.push('/dash')
        })
    }

    render() {
        return (
            <Div>

                <Header />

                <Section>
                    <Title>Login</Title>
                    <br />

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
                        onChange={e => this.handleChange('password', e.target.value)}
                        type="text" />
                    </div>

                    <br />

                    <button
                    onClick={() => this.login()}
                    >Login</button>

                </Section>

            </Div>
        )
    }
}

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps, {updateUsername})(Login)