import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
        this.MyRef = React.createRef()
    }
    focusInput(){
        this.MyRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <input ref={this.MyRef} />
            </div>
        )
    }
}

export default Input
