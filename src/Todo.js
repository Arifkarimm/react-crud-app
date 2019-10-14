import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      id: null,
      mockData: []
    };

    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleSubmit(event) {
    event.preventDefault();

    const takeObjectData = {
      id: Date.now(),
      title: event.target.inputText.value,
      done: false
    };

    const updateMockData = [...this.state.mockData, takeObjectData];

    this.setState({
      mockData: updateMockData
    });
  }

  render() {
    console.log(this.state.mockData);
    return (
      <form onSubmit={this.onHandleSubmit} className="form-handle">
        <input type="text" name="inputText" placeholder="Insert Inpute value" />
        <button type="submit">Add Item</button>
      </form>
    );
  }
}

export default Todo;
