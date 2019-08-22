import React, { Component } from 'react'

class Greet2 extends Component {

    constructor(){
        super()
        this.state = {
            pozdrav : "Sajt Bonesa"
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.pozdrav}</h1>
            </div>
        )
    }
}
export default Greet2;