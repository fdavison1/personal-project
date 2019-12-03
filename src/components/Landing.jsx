import React from 'react'
import styled from 'styled-components'
import { Div, Title } from '../css/styledComponents'
import Header from './Header'
import Footer from './Footer'

const Container = styled.div`
padding: 50px
display: flex
max-width: 1200px
margin: 0 auto
padding-top: 50px
box-sizing: border-box
flex-direction: column`

const Stripe = styled.div`
display: flex
align-items: center
background: #c2dde6
box-sizing: border-box`

const BoxContainer = styled.div`
display: flex
flex-wrap: wrap
justify-content: center`

const Box = styled.div`
border: 1px solid black
height: 250px
width: 250px
margin: 10px`

const SubTitle = styled.p`
font-size: 1.5rem
margin-top: 10px
padding: 0`

export default function Landing() {
    return (
        <Div>
            <Header />
            
            <Container>
                <Title>features</Title>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatibus magni architecto temporibus officiis porro eaque cumque voluptas odio recusandae, velit tenetur ipsum suscipit tempora facere aperiam laudantium necessitatibus dolor.</p>
                <BoxContainer>
                    <Box>
                        <SubTitle>Responsive Design</SubTitle>
                    </Box>
                    <Box>
                        <SubTitle>Drag and Drop using React Sortable HOC</SubTitle>
                    </Box>
                    <Box>
                        <SubTitle>Redux</SubTitle>
                    </Box>
                    <Box>
                        <SubTitle>Authentication using Sessions</SubTitle>
                    </Box>
                    <Box>
                        <SubTitle>Hosted with Digital Ocean</SubTitle>
                    </Box>
                    <Box>
                        <SubTitle>Styled Components</SubTitle>
                    </Box>
                    <Box>
                        <SubTitle>Unit Testing using Jest and Enzyme</SubTitle>
                    </Box>
                    <Box>
                        <SubTitle>Full-Stack</SubTitle>
                    </Box>
                </BoxContainer>

            </Container>

            <Footer />

            {/* <Stripe>
                <Container>
                    <Title>about</Title>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad at, nam aperiam porro, quidem eos, aspernatur accusamus adipisci natus id tempora optio suscipit inventore iure veritatis voluptatem atque totam. Repellat?</p>
                </Container>
            </Stripe> */}
        </Div>
    )
}