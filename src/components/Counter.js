import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    increment(){
        // this.setState({
        //     count: this.state.count + 1
        // }, ()=> console.log(this.state.count, "callback value"))
        // console.log(this.state.count);
        this.setState((prevState)=>({
            count: prevState.count + 1
        })) 
    }

    incrementBy5(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment() 
    }
  render() {
    return (
        <div>
      <div>Counter - {this.state.count}</div>
      <button onClick = {()=> this.incrementBy5()}>Increment</button>
      </div>
    )
  }
}

export default Counter