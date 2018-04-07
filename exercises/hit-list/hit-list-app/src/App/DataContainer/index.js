import React, { Component } from 'react';
import DataList from './DataList.js';
import axios from 'axios';

const hitListUrl = 'http://api.vschool.io:6543/hitlist.json';

// axios.get(hitListUrl).then(response=> console.log(response.data))

class DataContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            errMsg: "",
            loading: true
        }
    }

    componentDidMount() {
        axios.get(hitListUrl).then(response => {
            const results = response.data;
            console.log(results)
            this.setState({
                people: results,
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
        const { people, errMsg, loading } = this.state;
        if (loading) {
            return <div>...loading</div>
        } else {
            if(errMsg) {
                return <p>Sorry, you're hitlist is not available :(</p>
            } else {
                return <DataList people={people}></DataList>
            }
        }
    }
}

export default DataContainer;