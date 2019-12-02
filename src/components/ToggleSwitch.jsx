
import React from 'react'
import styled from 'styled-components'
import '../css/ToggleSwitch.css'

const Toggle = styled.div`
box-sizing: border-box;
display: flex
justify-content: flex-end 
margin: 10px`

export default function ToggleSwitch() {
    return (

        <Toggle>

            <div class="onoffswitch">
                <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" />
                <label class="onoffswitch-label" for="myonoffswitch">
                    <span class="onoffswitch-inner"></span>
                    <span class="onoffswitch-switch"></span>
                </label>
            </div>

        </Toggle>
    )
}