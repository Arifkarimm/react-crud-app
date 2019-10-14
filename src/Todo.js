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

  onHandleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onHandleSubmit} className="form-handle">
        <input
          type="text"
          value="inputeText"
          placeholder="Insert Inpute value"
        />
        <button type="submit">Add Item</button>
      </form>
    );
  }
}

export default Todo;
