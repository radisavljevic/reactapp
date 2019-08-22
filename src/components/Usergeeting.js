import React, { Component } from 'react'

class Usergeeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {

        return(
            this.state.isLoggedIn ?
            <div>Welcome Ropeta Legendo</div> :
            <div>Welcome Guest</div>
        )

        // let message;
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Ropeta Legendo</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        // return (
        //     <div>
        //         <div>Welcome Ropeta Legendo</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default Usergeeting
