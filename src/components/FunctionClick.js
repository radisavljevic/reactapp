import React, { Component } from 'react'

class FunctionClick extends Component {

    constructor(){
        super()
        this.state = {
            pozz : "nije se ulogovao"
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log(this);
        
        this.setState({
            pozz : "Ulogovao se!!!"
        })
            
    }

    render() {
        return (
            <div>
                <div>{this.state.pozz}</div>
                <button onClick={this.handleClick}>LOG IN</button>
            </div>
        )
    }
}

export default FunctionClick;
