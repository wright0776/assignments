import React, { Component } from 'react'
import FormDisplay from "./FormDisplay";

class Form extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            name: "",
            people: []
        }
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { value } = event.target;
        this.setState({name: value});
        console.log(event.target.value)
    }

    handleSubmit(event) {
        alert(`Thanks, ${this.state.name}!`)
        event.preventDefault();
        this.setState(prevState => {
            return {
            name: "",
            people: [...prevState.people, this.state.name]
        }
        })
    }

    render() {
        const props = {
            handleSubmit: this.handleSubmit,
            handleChange: this.handleChange,
            ...this.state
        }
        return (
            <FormDisplay {...props} />
        )
    }
}

export default Form;