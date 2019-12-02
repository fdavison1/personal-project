import React from 'react'
import styled from 'styled-components'
import { Div, Title } from '../css/styledComponents'
import Header from './Header'

const Container = styled.div`
padding: 50px
display: flex
min-height: 500px
padding-top: 50px
box-sizing: border-box`

const Stripe = styled.div`
display: flex
align-items: center
background: #c2dde6
box-sizing: border-box`

export default function Landing() {
    return (
        <Div>
            <Header />



            <Container>

                <Title>features</Title>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatibus magni architecto temporibus officiis porro eaque cumque voluptas odio recusandae, velit tenetur ipsum suscipit tempora facere aperiam laudantium necessitatibus dolor.</p>
            </Container>

            <Stripe>
                <Container>
                    <Title>about</Title>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad at, nam aperiam porro, quidem eos, aspernatur accusamus adipisci natus id tempora optio suscipit inventore iure veritatis voluptatem atque totam. Repellat?</p>
                </Container>
            </Stripe>
        </Div>
    )
}