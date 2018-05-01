import React, { Component } from 'react'

class TopMargin extends Component {
    constructor(props){
        super(props);
        this.state = {
            // open: false
        }
    }

    render () {
        // const {open} = this.state
        return (
                <div className='buttonMenu'>
                    <div className='buttonContainer'>
                        <div className='button'></div>
                        <div className='button'></div>
                        <div className='button'></div>
                    </div>
                </div>
        )
    }
}

export default TopMargin;