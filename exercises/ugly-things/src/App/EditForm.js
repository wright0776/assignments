import React, {Component} from 'react';
import {connect} from 'react-redux';
import {editThing} from '../redux/uglyThings';

class EditForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputs: {
                imgUrl: props.imgUrl,
                caption: props.caption
            }
        }
    }

    handleChange = (event) => {
        const {value, name} = event.target;
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
        const {index, editThing, editClick} = this.props;
        editClick();
        editThing(index, this.state.inputs);
    }

    render() {
        const {imgUrl,caption} = this.state.inputs;
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} name='imgUrl' value={imgUrl} type="text"/>
                <input onChange={this.handleChange} name='caption' value={caption} type="text"/>
                <button>Save</button>
            </form>
        )
    }
}

export default connect(null, {editThing})(EditForm);