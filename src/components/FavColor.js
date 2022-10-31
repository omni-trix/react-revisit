import React, {Component}from "react";

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
  
    componentDidMount(){
        setTimeout(()=> {
            this.setState({favoritecolor: "yellow"})
        }, 5000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById("div1").innerHTML = "Before the update the favourite was " + prevState.favoritecolor
    }

    componentDidUpdate(){
        document.getElementById("div2").innerHTML = "The updated favourite is " + this.state.favoritecolor
    }
    shouldComponentUpdate() {
        return true;
      }
    changeColor = () => {
      this.setState({favoritecolor: "blue"});
    }
    render() {
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
        <div id="div1"></div>
        <div id="div2"></div>
        </div>
      );
    }
  }

  export default Header