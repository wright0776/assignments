import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.initialState = {
            inputs: {
                firstName: "",
                lastName: "",
                living: true,
                bounty: 0,
                type: ""
            }
        }
        this.state = this.initialState;
    }
    handleChange = (e) => {
        const {name,value} = e.target;
        this.setState(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }
    handleSubmit = (e) => {
        e.preventDefault;
        

    }
    render () {
        console.log(this.state.inputs)
        const {firstName,lastName,living,bounty,type} = this.state.inputs;
        return (
            <form onSubmit={this.handleSubmit}>
                <p>Name</p>
                <input onChange={this.handleChange} name='firstName' value={firstName} placeholder='First Name' type="text"/>
                <input onChange={this.handleChange} name='lastName' value={firstName} placeholder='Last Name' type="text"/>
                <p>Living?</p>
                <label htmlFor='yes'>
                    <input onChange={this.handleChange} name='living' value={living} type="radio"/> Yes
                </label>
                <label htmlFor='no'>
                    <input onChange={this.handleChange} name='living' value={living} type="radio"/> No
                </label>
                <p>Bounty:</p>
                <label htmlFor='bounty'>
                    $<input onChange={this.handleChange} name='bounty' value={firstName} placeholder='Bounty' type="number"/>
                </label>
                <p>Type</p>
                <label htmlFor='sith'>
                    <input onChange={this.handleChange} name='type' value={type} type="radio"/> Sith
                </label>
                <label htmlFor='jedi'>
                    <input onChange={this.handleChange} name='type' value={type} type="radio"/> Jedi
                </label>
                <p>Please look over your bounty and make sure everything is correct. Once you submit, your bounty will be placed... Editing is possible but the deed may already be done.</p>
                <input onChange={this.handleSubmit} type="submit"/>
            </form>
        )
    }
}

export default Form;