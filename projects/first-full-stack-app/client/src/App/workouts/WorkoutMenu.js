import React, { Component } from 'react'

class WorkoutMenu extends Component {
    constructor(props) {
        super(props);
        this.initialState = {};
    }

    render() {
        const { openClick } = this.props
        return (
            <div onClick={this.openClick}>
                <div>
                    ...
                </div>
                <div className='popupMenu'>
                    this is a test
                <button className='close' onClick={openClick}>&times;</button>
                </div>
            </div>
        )
    }
}

export default WorkoutMenu