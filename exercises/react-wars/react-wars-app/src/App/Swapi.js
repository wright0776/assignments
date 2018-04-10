import React from 'react'
import axios from 'axios'
import Home from './Home'
import { Link,Switch,Route } from "react-router-dom";
import SwapiDetails from './SwapiDetails';

class Swapi extends React.Component {
    constructor() {
        super();
        this.state = {
            people: [],
            errMsg: "",
            loading: true
        }
    }

    componentDidMount() {
        axios.get('https://swapi.co/api/people/').then(response => {
            this.setState({
                people: response.data.results,
                loading: false
            })
            // console.log(this.state.people)
        })
    }
    render() {
        const people = this.state.people.map((person, i) => {
            return (
                <h2 key={person.name + i} >
                    <Link to={`/swapi/${i + 1}`}className={i === 3 ? "darth" : "link"}>{person.name}</Link>
                </h2>
            )
        });
        // console.log(people)
        return (
            <div className='swapi'>
                <div className='people'>
                    {people}
                </div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/swapi/:index' component={SwapiDetails}/>
                </Switch>
            </div>
        )
    }
}

export default Swapi
