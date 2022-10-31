import React, { Component } from 'react'
import FRInputRef from './FRInputRef'

class FRParentRef extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }

    handleClick = () => {
        this.inputRef.current.focus()
    }

  render() {
    return (
      <div>
        <FRInputRef ref = {this.inputRef}/>
        <button onClick={this.handleClick}>Focus input</button>
      </div>
    )
  }
}

export default FRParentRef