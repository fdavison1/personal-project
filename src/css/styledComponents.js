import styled from 'styled-components'

//Sidebar
export const Bar = styled.div`
height: 100vh
background: lightgray
width: 150px
border-right: 1px solid black
display: flex
flex-direction: column
align-items: center
justify-content: space-between`

//Header
export const StyledHeader = styled.header`
background: lightgray
height: 100px
border-bottom: solid 1px black`

//Dashboard Container
export const DashContainer = styled.div`
display: flex`

//Dash Display
export const DashDisplay = styled.div`
display: flex
justified-content: center
margin: 0 auto
min-width: 1200px
flex-direction: column
`

//Div
export const Div = styled.div`
text-align: center
margin: 0 auto`

//Container
export const Container = styled.div`
  border: 1px solid lightgray
  border-radius: 5px
  padding: 15px
  min-width: 1000px
  text-align: left
  background: lightyellow
  margin: 10px 0
  border: solid black
  display: flex
  flex-direction: column
  `

//Task Container
export const TaskContainer = styled.div`
border: 1px solid lightgray
  border-radius: 5px
  margin-top: 10px
  padding: 5px
  min-width: 1000px
  text-align: left
  background: white
`

//Project Title
export const Title = styled.h1`
  font-size: 3rem`

//Task Content
export const Content = styled.h1`
font-size: 1.5rem`

//New task button
export const TaskButton = styled.div`
height: 50px
width: 50px
border: 1px solid black
border-radius: 50%
display: flex
text-align: center
background: black
margin: 5px
font-weight: 200
font-size: 2.5rem
color: oldlace
justify-content: center
margin-left: 30px`
//need to transform 50%.............
//fix margin-left (cheater fix)

export const Right = styled.div`
display: flex;
flex-direction: row-reverse;`