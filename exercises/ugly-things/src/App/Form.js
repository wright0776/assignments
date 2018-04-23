import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addThing } from '../redux/uglyThings';

class Form extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                imgUrl: "",
                caption: ""
            },
            completed: true
        }
        this.state = this.initialState;
    }

    handleChange = (e) => {
        const { name, value } = e.target;
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
        const {imgUrl,caption} = this.state.inputs;
        if(imgUrl.length < 1 && caption.length < 1){
            return this.setState(prevState => {
                return {
                    ...prevState,
                    completed: false
                }
            })
        }
        this.props.addThing(this.state.inputs);
        this.setState(this.initialState);
    }

    render() {
        const { imgUrl, caption } = this.state.inputs;
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Add Ugly Thing</h2>
                {!this.state.completed ? 
                    <div>please complete all fields</div> : null
                }
                <input onChange={this.handleChange} type="text" name='imgUrl' value={imgUrl} placeholder='Image Url' />
                <input onChange={this.handleChange} type="text" name='caption' value={caption} placeholder='Caption' />
                <button>Submit</button>
            </form>
        )
    }
}

export default connect(null, { addThing })(Form);