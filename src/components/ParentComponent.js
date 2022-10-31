import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Pravesh"
      }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "Pravesh"
            })
        }, 2000)
    }
    render() {
        console.log("**********Parent component*********")
        return (
            <div>
                ParentComponent
                <MemoComp  name  = {this.state.name}/>
            </div>
        )
    }
}

export default ParentComponent