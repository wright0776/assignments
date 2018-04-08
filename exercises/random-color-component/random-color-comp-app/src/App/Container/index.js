import React, { Component } from 'react';
import axios from 'axios';
import Data from './Data';

const randomColorUrl = 'http://www.colr.org/json/color/random';

class Container extends Component {
    constructor (props) {
        super(props);
        this.state = {
            color: "",
            errMsg: "",
            loading: true
        }
    }

    componentDidMount() {
        axios.get(randomColorUrl).then(response => {
            const results = response.data;
            const color = response.data.colors[0].hex;
            console.log(results.colors[0].hex);
            this.setState({
                color: color,
                loading: false
            })
        })
        .catch(err => {
            this.setState({
                errMsg: err.message,
                loading: false
            })
        })
    }

    render() {
        const {color,errMsg,loading} = this.state;
        if(loading) {
            return <div>...loading</div>
        } else {
            if(errMsg) {
                return <p>sorry, something went wrong :(</p>
            } else {
                return <Data color={color} />
            }
        }
    }
}

export default Container;