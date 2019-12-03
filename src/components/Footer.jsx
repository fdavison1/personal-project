import React from 'react'
import styled from 'styled-components'
import { Title } from '../css/styledComponents'

const Stripe = styled.div`
display: flex
align-items: center
background: #c2dde6
box-sizing: border-box`

const Container = styled.div`
padding: 50px
display: flex
max-width: 1200px
margin: 0 auto
padding-top: 50px
box-sizing: border-box
flex-direction: column`

export default function Footer(){
    return (
        <Stripe>
        <Container>
            <Title>about</Title>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad at, nam aperiam porro, quidem eos, aspernatur accusamus adipisci natus id tempora optio suscipit inventore iure veritatis voluptatem atque totam. Repellat?</p>
        </Container>
    </Stripe>
    )
}