
import React from 'react'
import styled from 'styled-components'
import '../css/ToggleSwitch.css'

const Toggle = styled.div`
box-sizing: border-box;`

export default function ToggleSwitch(props) {


    function toggle(e){
        props.hidden(e)
    }


    return (

        <Toggle>

            <div className="onoffswitch">
                <input type="checkbox" className="onoffswitch onoffswitch-checkbox" id="myonoffswitch" 
                onChange={(e)=> toggle(e)}/>
                <label className="onoffswitch-label" htmlFor="myonoffswitch">
                    <span className="onoffswitch-inner"></span>
                    <span className="onoffswitch-switch"></span>
                </label>
            </div>

        </Toggle>
    )
}