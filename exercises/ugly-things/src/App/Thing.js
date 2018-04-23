import React, { Component } from 'react';
import EditForm from './EditForm';

class Thing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }

    editClick = () => {
        this.setState(prevState => ({ editing: !prevState.editing }));
    }

    render() {
        const { imgUrl, caption, removeThing, index } = this.props;
        return (
            <div>
                <img src={imgUrl} alt={caption} />
                <h2>{caption}</h2>
                <button onClick={() => removeThing(index)}>Remove</button>
                <button onClick={this.editClick}>Edit</button>
                {
                    this.state.editing ?
                        <EditForm index={index} imgUrl={imgUrl} caption={caption} editClick={this.editClick}/>
                        : null
                }
            </div >
        )
    }
}

export default Thing;

