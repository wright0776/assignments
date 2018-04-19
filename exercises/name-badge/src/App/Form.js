import React, { Component } from 'react'

import {connect} from 'react-redux';
import {addBadge} from '../redux/badges';

class Form extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            showLengthAlert: false,
            showPhoneAlert: false,
            inputs: {
                firstName: '',
                lastName: '',
                email: '',
                placeOfBirth: '',
                phone: '',
                favoriteFood: '',
                aboutYoself: ''
            }
        }
        this.state = this.initialState
    }
    handleChange = (e) => {
        const {name,value} = e.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const obj = this.state.inputs;
        for(let i in obj){
            if(obj[i].length < 3){
                return this.setState({showLengthAlert: true});
            }
            if (
                i === 'phone' &&
                obj[i].length !== 10 &&
                typeof(obj[i] !== 'number')){
                    return this.setState({showPhoneAlert: true,showLengthAlert: false})
            }
        }
        this.props.addBadge(this.state.inputs);
        this.setState(this.initialState);
    }
    render() {
        const {firstName,lastName,email,placeOfBirth,phone,favoriteFood,aboutYoself} = this.state.inputs;
        return (
            <div className='formContainer'>
                {this.state.showLengthAlert ? (
                    <div className='alert'>
                        <p>please complete all fields</p>
                    </div>
                ) : null}
                {this.state.showPhoneAlert ? (
                    <div className='alert'>
                        <p>Phone number must be 10 digits only numbers</p>
                    </div>
                ) : null}
                <form onSubmit={this.handleSubmit} className='form'>
                    <input onChange={this.handleChange} name='firstName' value={firstName} placeholder='First Name' type="text"/>
                    <input onChange={this.handleChange} name='lastName' value={lastName} placeholder='Last Name' type="text"/>
                    <input onChange={this.handleChange} name='email' value={email} placeholder='Email' type="text"/>
                    <input onChange={this.handleChange} name='placeOfBirth' value={placeOfBirth} placeholder='Place Of Birth' type="text"/>
                    <input onChange={this.handleChange} name='phone' value={phone} placeholder='Phone Number' type="text"/>
                    <input onChange={this.handleChange} name='favoriteFood' value={favoriteFood} placeholder='Favorite Food' type="text"/>
                    <textarea onChange={this.handleChange} name='aboutYoself' value={aboutYoself} placeholder='About Yourself' type="text"/>
                    <button className='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect (null, {addBadge})(Form);