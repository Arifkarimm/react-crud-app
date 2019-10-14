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

    event.target.inputText.value = '';
    event.target.inputText.focus();
  }

  render() {
    console.log(this.state.mockData);
    return (
      <div>
        <form onSubmit={this.onHandleSubmit} className="form-handle">
          <input
            type="text"
            name="inputText"
            placeholder="Insert Inpute value"
          />
          <button type="submit">Add Item</button>
        </form>
        <ul>
          {this.state.mockData.map(item => (
            <li key={item.id}>
              {item.title}
              <button type="button">Edit</button>
              <button type="button">Delete</button>
              <button type="button">Complete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
