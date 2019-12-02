
import React from 'react'
import styled from 'styled-components'
import '../css/ToggleSwitch.css'

const Toggle = styled.div`
box-sizing: border-box;
display: flex
justify-content: flex-end 
margin: 10px`

export default function ToggleSwitch(props) {


    function toggle(e){
        // console.log(e.target.checked)
        props.hidden(e)
    }


    return (

        <Toggle>

            <div className="onoffswitch">
                <input type="checkbox" className="onoffswitch" 
                className="onoffswitch-checkbox" id="myonoffswitch" 
                onChange={(e)=> toggle(e)}/>
                <label className="onoffswitch-label" htmlFor="myonoffswitch">
                    <span className="onoffswitch-inner"></span>
                    <span className="onoffswitch-switch"></span>
                </label>
            </div>

        </Toggle>
    )
}