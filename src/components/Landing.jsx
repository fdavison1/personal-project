import React from 'react'
import styled from 'styled-components'
import { Div, Title } from '../css/styledComponents'
import Header from './Header'
import Footer from './Footer'

const Container = styled.div`
padding: 50px
display: flex
align-items: center
justify-content: space-between
max-width: 1200px
margin: 0 auto
padding-top: 50px
box-sizing: border-box
flex-direction: column`

const BoxContainer = styled.div`
display: flex
flex-wrap: wrap
justify-content: center`

const Box = styled.div`
border: 1px solid #999999
height: 250px
width: 250px
margin: 10px
border-radius: 3px`

const SubTitle = styled.p`
font-size: 1.5rem
margin: 25px
padding: 0
font-weight: 200`

const TitleContainer = styled.div`
margin: 50px 15px`

const Paragraph = styled.p`
`

const SectionContainer = styled.div`
padding-bottom: 100px`

export default function Landing() {
    return (
        <Div>
            <Header />
            
            <Container>
                <SectionContainer>

                <TitleContainer>
                <Title>features</Title>
                <Paragraph>
                    A personal project designed to demonstrate skills and technologies learned while at DevMountain. This project was built in React. 
                </Paragraph>
                </TitleContainer>
                
                <BoxContainer>
                    <Box>
                        <SubTitle>React</SubTitle>
                        <img src="https://cdn.worldvectorlogo.com/logos/react.svg" alt="react logo"/>
                    </Box>
                    <Box>
                        <SubTitle>Drag and Drop using React Sortable HOC</SubTitle>
                        <img src="https://chrissainty.com/content/images/2019/08/simple-drag-and-drop-with-blazor.jpg" alt="drag and drop todo list"/>
                    </Box>
                    <Box>
                        <SubTitle>Redux</SubTitle>
                        <img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" alt="Redux logo"/>
                    </Box>
                    <Box>
                        <SubTitle>Authentication using Sessions</SubTitle>
                        <img src="https://www.centrify.com/media/1773976/pm.png" alt="Person with lock"/>
                    </Box>
                    <Box>
                        <SubTitle>Responsive Design</SubTitle>
                        <img src="http://www.wattabyte.com/wp-content/uploads/2017/08/mobile-responsive-design.png" alt="various devices with same website"/>
                    </Box>
                    <Box>
                        <SubTitle>Styled Components</SubTitle>
                        <img src="https://cdn-media-1.freecodecamp.org/images/1*p1TndLk3UsGPBsM7qHPZIw.png" alt="Styled Components logo"/>
                    </Box>
                    <Box>
                        <SubTitle>Unit Testing using Jest and Enzyme</SubTitle>
                        <img src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/940/full/jestlogo.png" alt="Jest logo"/>
                    </Box>
                    <Box>
                        <SubTitle>Full-Stack with PostgreSQL</SubTitle>
                        <img src="https://portworx.com/wp-content/uploads/2018/05/postgresql-logo.png" alt="PostgreSQL"/>
                    </Box>
                </BoxContainer>

                </SectionContainer>
            </Container>

            <Footer />

        </Div>
    )
}