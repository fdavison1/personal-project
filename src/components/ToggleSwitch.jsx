
import React from 'react'
import styled from 'styled-components'
import '../css/ToggleSwitch.css'

const Toggle = styled.div`
box-sizing: border-box
display: flex
justify-content: flex-end 
margin: 10px`

export default function ToggleSwitch() {
    return (

        <Toggle>

        <input
            className="react-switch-checkbox"
            id={`react-switch-new`}
            type="checkbox"
        />
        <label
            className="react-switch-label"
            htmlFor={`react-switch-new`}
        >
            <span className={`react-switch-button`} />
        </label>

        </Toggle>
    )
}