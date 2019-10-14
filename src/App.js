import React from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>CRUD App</h2>
      </header>
      <Todo />
    </div>
  );
}

export default App;
