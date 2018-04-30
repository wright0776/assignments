import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getWorkouts } from '../../redux/workouts';
import WorkoutMenu from './WorkoutMenu';

class WorkoutsList extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            open: false,
            opened: ""
        };
        this.state = this.initialState;
    }

    componentDidMount() {
        this.props.getWorkouts();
    }

    openClick = (e) => {
        console.log(e.target.name)
        e.persist();
        this.setState(prevState => ({
            open: !prevState.open,
            opened: e.target.name
        }));
    }

    render() {
        const { loading, errMsg, data } = this.props;
        if (loading) {
            return (
                <div className='loading'>...loading</div>
            )
        }
        if (errMsg) {
            return (
                <div className='errMsg'>{errMsg}</div>
            )
        } else {
            const comps = data.map((item, i) =>
                <div key={i} className='moveInList'>
                    <Link to={`/workouts/${item._id}`} key={item._id}>{item.name}</Link>
                    <button onClick={this.openClick} name={item._id}>...</button>
                    {this.state.open && this.state.opened === item._id ?
                        <div className='popMenu'>
                            <div className='popMenuContent'>
                                <WorkoutMenu openClick={this.openClick}/>
                            </div>
                        </div> : null}
                </div>)
            return (
                <div className='workoutList'>
                    <h2 className='pageTitle'>Workouts</h2>
                    <div className='back'>
                        <Link to='/'>Main Menu</Link>
                        <input className='search' placeholder='search' type="search" />
                    </div>
                    <div className='list'>
                        {comps}
                    </div>
                </div>
            )
        }

    }
}

const mapStateToProps = (state) => {
    return state.workouts
}

export default connect(mapStateToProps, { getWorkouts })(WorkoutsList)
