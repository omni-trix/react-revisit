import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            comments: "",
            topic: "react"
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({
            username: event.target.value
        }, () => console.log(this.state.username))
    }

    handleOptionChange = (event) => {
        this.setState({
            topic: event.target.value
        }, console.log(this.state.topic, "topic"))
    }

    handleSubmit = (event) => {
        alert(`${this.state.username},,, ${this.state.comments},,, ${this.state.topic}`)
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit = {this.handleSubmit} >
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.handleChange} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={(event) => {
                        this.setState({
                            ...this.state,
                            comments: event.target.value
                        })
                    }}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleOptionChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option vaklue="vue">Vue</option>
                    </select>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}

export default Form