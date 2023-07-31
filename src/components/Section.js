import React, { Component } from "react";
import styles from "./Section.module.css";
import { v4 } from "uuid";

class Section extends Component {
  state = {
    inputValue: '',
    todos:[]
  }

  handleChange = (e) => {
    this.setState({inputValue:e.target.value})
  }

  handleAdd= () => {
    const {todos, inputValue} =this.state
    this.setState({todos: [...todos, {title: this.state.inputValue, id: v4()}]})
  }
  render() {
   const {inputValue} = this.state
   return (
    <div>
      <input value={inputValue} onChange={this.handleChange}/>
      <button onClick={this.handleChange}>Add</button>
    </div>
   )
  }
}

export default Section;
