import React, { Component } from 'react'
import "./myStyles.css"

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() {  

        return this.state.isLoggedIn && <div className={this.props.primary? "primary": ""}>Welcome Pravesh</div>
      
    }
}

export default UserGreeting