import React, { Component } from 'react'
import RegComp from './RegComp';
import PureComp from './PureComp';

class ParntComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Ropeta'
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Ropeta'
            })
        }, 2000)
    }

    render() {
        console.log('**************Parent component render****************');
        
        return (
            <div>
                Parent Component
               <RegComp name={this.state.name}/>
               <PureComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParntComp
