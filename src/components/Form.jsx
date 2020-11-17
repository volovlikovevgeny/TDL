import React, { Component } from 'react'

export default class Form extends Component {

    inputValue = {
        todo: ''
    }

    state = this.inputValue

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state)
        this.setState(this.inputValue)
    }


    render() {

        const { todo } = this.state
        return (
            <form onSubmit={this.handleOnSubmit}>
                <input
                    type="text"
                    required
                    onChange={this.handleChange}
                    id='todo'
                    name='todo'
                    value={todo}
                />
                <button type='submit'>Add</button>
            </form>
        )
    }
}
