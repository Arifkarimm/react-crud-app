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

  onHandleDelete(id) {
    const isNotId = item => item.id !== id;
    const updateList = this.state.mockData.filter(isNotId);

    this.setState({
      mockData: updateList
    });
  }

  onHandleEdit(id, title) {
    this.setState({
      id: id,
      edit: true,
      title: title
    });
  }

  renderEditForm() {
    if (this.state.edit === true) {
      return (
        <form onSubmit={this.onHandleUpdate} className="form-update">
          <input
            type="text"
            name="inputUpdatText"
            placeholder="Insert Update value"
            defaultValue={this.state.title}
          />
          <button type="submit">Update</button>
        </form>
      );
    }
  }
  render() {
    return (
      <div>
        {this.renderEditForm()}
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
              <button
                type="button"
                onClick={() => this.onHandleEdit(item.it, item.title)}
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => this.onHandleDelete(item.id)}
              >
                Delete
              </button>
              <button type="button">Complete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
