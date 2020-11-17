import React from 'react';
import Form from './components/Form';
import List from './components/List';

import './App.css';


class App extends React.Component {
  state = {
    data: []
  }

  handleSubmit = (newVal) => {
    this.setState({
      data: [...this.state.data, newVal]
    })
  }


  // Local Storage

  componentDidUpdate() {
    localStorage.setItem('dataStore', JSON.stringify(this.state.data))
  }

  componentDidMount() {
    const dataStore = JSON.parse(localStorage.getItem('dataStore'));
    if (dataStore !== null) {
      this.setState({
        data: dataStore
      })
    }
  }


  handleRemove = index => {
    const { data } = this.state
    this.setState({
      data: data.filter((item, i) => {
        return i !== index
      })
    })
  }


  handleOnEdit = (editVal, index) => {
    const { data } = this.state

    data.forEach((item, i) => {
      if (i === index) {
        item.todo = editVal;
      }
    })
    this.setState({ data: data })
  }

  render() {
    const { data } = this.state;

    return (
      <div className='app'>
        <Form onSubmit={this.handleSubmit} />
        <h1>To do list</h1>

        {
          data.length === 0
            ?
            <h2>Nothing to do...</h2>
            :
            <List
              todo={data}
              onDelete={this.handleRemove}
              onEdit={this.handleOnEdit}
              count={data.length}
            />
        }
      </div>
    )
  }
}

export default App;
