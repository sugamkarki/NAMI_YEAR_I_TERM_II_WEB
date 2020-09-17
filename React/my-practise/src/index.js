import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Form from './components/form'

export default class Index extends Component {
  render() {
    return (
      <div>
        <Form/>
      </div>
    )
  }
}
ReactDOM.render(<Index/>,document.getElementById('root'))