import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Title } from '../css/styledComponents'
import { updateUsername } from '../dux/reducer'
import Swal from 'sweetalert2'
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
`

const StyledSpan = styled.span`
font-size: 1.5rem
font-weight: 200`

const PageContainer = styled.div`
height: 100vh
position: relative`

const SectionContainer = styled.div`
padding-bottom: 100px`


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

    login() {
        const { username, password } = this.state
        localStorage.setItem('username', username)
        axios.post('/auth/login', { username, password })
            .then(res => {
                this.props.updateUsername(res.data.user.username)
                localStorage.setItem('userID', res.data.user.userID)
                //sweetalert
                Swal.fire(
                    res.data.message,
                    'you are logged in!',
                    'success')
                //link to dash....
                this.props.history.push('/dash')
            }).catch(err => {
                Swal.fire(
                    err.response.data.message,
                    err.message,
                    'error')
            })
    }

    render() {
        return (
            <PageContainer>


                <Header />

                <SectionContainer>

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
                            type="password" />
                    </div>

                    <br />

                    <button
                        onClick={() => this.login()}
                        >Login</button>

                </Section>
                </SectionContainer>

                <Footer />
            </PageContainer>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, { updateUsername })(Login)