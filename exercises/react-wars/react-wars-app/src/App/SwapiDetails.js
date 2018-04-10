import React from 'react';
import axios from 'axios';

const swApiUrl = 'https://swapi.co/api/people/';

class SwapiDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            person: {},
            errMsg: "",
            loading: true
        }
    }

    componentDidMount() {
        const index = this.props.match.params.index
        console.log(this.props)
        axios.get(swApiUrl + index)
            .then(response => {
                this.setState({
                    person: response.data,
                    loading: false
                })
                // console.log(this.props)
            })
            .catch(err => {
                this.setState({
                    errMsg: err.message,
                    loading: false
                })
            })
    }

    componentWillReceiveProps(nextProps) {
        // const { index } = this.props.match.params;
        const newIndex = nextProps.match.params.index;
        // if the indices are different, make another request using th enew index as url parameter
        axios.get(swApiUrl + newIndex)
            .then(response => {
                this.setState({
                    person: response.data,
                    loading: false
                })
                // console.log(this.props)
            })
            .catch(err => {
                this.setState({
                    errMsg: err.message,
                    loading: false
                })
            })
    }

    render() {
        const { person, errMsg, loading } = this.state;
        if (loading) {
            return <div>...loading</div>
        } else {
            if (errMsg) {
                return <p>Sorry, you're data is not available</p>
            } else {
                // console.log(person)
                const mapDets = (obj, i) => {
                    let el = []
                    for (let i in obj) {
                        if(i === 4){
                            el.push(<p className='darthd' key={obj[i] + i}>{i}: {obj[i]}</p>)
                        } else {
                        el.push(<p className='linkd' key={obj[i] + i}>{i.toUpperCase()}: {obj[i]}</p>)
                        }
                    }
                    return el;
                }
                return (
                    <div className='details'>
                        <h1>{mapDets(person)}</h1>
                    </div>
                )
            }
        }
    }

}

export default SwapiDetails;