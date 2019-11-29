import React from 'react'

class Image extends React.Component {
    state = {
        style: {height: 175, width: 300, border: '3px solid red', borderStyle: 'hidden'}
    }
    
    render() {
        return (
            <div>
                <img src={this.props.image} style={this.state.style} />
            </div>
        )
    }
}

export default Image