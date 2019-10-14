import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      id: null,
      mockData: []
    };

    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.onUpdateHandle = this.onUpdateHandle.bind(this);
    this.onCompleteHandle = this.onCompleteHandle.bind(this);
    this.onHandleDelete = this.onHandleDelete.bind(this);
    this.onHandleEdit = this.onHandleEdit.bind(this);
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
    const updateItem = this.state.mockData.filter(isNotId);

    this.setState({
      mockData: updateItem
    });
  }

  onHandleEdit(id, title) {
    this.setState({
      id: id,
      edit: true,
      title: title
    });
  }

  onUpdateHandle(event) {
    event.preventDefault();

    this.setState({
      mockData: this.state.mockData.map(item => {
        if (item.id === this.state.id) {
          item['title'] = event.target.updateItem.value;
          return item;
        }
        return item;
      })
    });

    this.setState({
      edit: false
    });
  }

  onCompleteHandle(id) {
    this.setState({
      mockData: this.state.mockData.map(item => {
        if (item.id === id) {
          item['done'] = true;
          return item;
        }
        return item;
      })
    });
  }

  renderEditForm() {
    if (this.state.edit === true) {
      return (
        <form onSubmit={this.onUpdateHandle}>
          <input
            type="text"
            name="updateItem"
            defaultValue={this.state.title}
          />
          <button typ="submit" className="btn-update">
            Update
          </button>
        </form>
      );
    }
  }

  render() {
    const { mockData } = this.state;
    return (
      <div>
        {this.renderEditForm()}

        <TodoForm onSubmit={this.onHandleSubmit} />

        <TodoList
          entries={mockData}
          onHandleDelete={this.onHandleDelete}
          onHandleEdit={this.onHandleEdit}
          onCompleteHandle={this.onCompleteHandle}
        />
      </div>
    );
  }
}

export default Todo;
