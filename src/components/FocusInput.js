import React, { Component } from 'react'

class FocusInput extends Component {

    constructor(props) {
        super(props)
        this.compRef = React.createRef()
    }
    onClickHandle = () => {
        this.compRef.current.FocusInput()
    }

    render() {
        return (
            <div>
                <input ref={this.compRef}/>
                <button onClick={this.onClickHandle}>Focus input</button>
            </div>
        )
    }
}

export default FocusInput
