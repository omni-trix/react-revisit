import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentF extends Component {
  render() {
    return (
      <div>
        <UserConsumer >
            {
                (userName) => {
                   return <div>{userName}</div>
                }
            }
        </UserConsumer>
      </div>
    )
  }
}

export default ComponentF