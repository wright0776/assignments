import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { postWorkout } from '../../redux/workouts';
import { getMoves } from '../../redux/moves';
// import MoveInNewWorkout from './MoveInNewWorkout';

class NewWorkout extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                name: "",
                target: "",
                type: "",
                moves: []
            },
            movesAdded: []
        }
        this.state = this.initialState;
    }

    componentDidMount() {
        this.props.getMoves();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.postWorkout(this.state.inputs)
    }
    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }
    addToWorkout = (e) => {
        e.persist();
        e.preventDefault();
        console.log(e.target.name);
        console.log(e.target.value);
        console.log(this.state.movesAdded)
        this.setState(prevState => {
            const newAdded = [...prevState.movesAdded, e.target.value];
            const newMoves = [...prevState.inputs.moves, e.target.name];
            return {
                inputs: {
                    ...prevState.inputs,
                    moves: newMoves
                },
                movesAdded: newAdded
            }
        })
    }
    removeMove = (e) => {
        e.persist();
        e.preventDefault();
        // this.state
    }
    formReset = (e) => {
        this.setState(this.initialState)
    }

    render() {
        let { name, target, type } = this.state.inputs
        const { loading, errMsg, data } = this.props
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
            return (
                <div className='newWorkout'>
                    <h2 className='pageTitle'>Create New Workout</h2>
                    <div className='back'>
                        <Link to='/'>Main Menu</Link>
                    </div>
                    <div className='formContainer'>
                        <form onSubmit={this.handleSubmit} className='workoutForm'>
                            <div className='workoutFormInputs'>
                                <input onChange={this.handleChange} name='name' value={name} placeholder='Workout Name' type="text" />
                                <input onChange={this.handleChange} name='target' value={target} placeholder='Target' type="text" />
                                <input onChange={this.handleChange} name='type' value={type} placeholder='Type' type="text" />
                                <h3>Exercises:</h3>
                                {this.state.movesAdded.length > 0 ? this.state.movesAdded.map((move,i) =>
                                    <p key={i}>
                                        {i+1}. {move}
                                        <button name={move._id} value={move.name} onClick={this.removeMove}>
                                            x
                                        </button>
                                    </p>) : null}
                                <div className='formButtonsContainer'>
                                    <input className='submit' type="submit" />
                                    <input onClick={this.formReset} className='reset' type="reset" />
                                </div>
                            </div>
                            <div className='moveListNewWContainer'>
                                {data.map((item, i) =>
                                    <div className='moveInNewWList' key={item._id + i}>
                                        <Link to={`/moves/${item._id}`} key={item._id}>
                                            {item.name}
                                        </Link>
                                        <button name={item._id} value={item.name} onClick={this.addToWorkout}>+</button>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return state.moves
}

export default connect(mapStateToProps, { postWorkout, getMoves })(NewWorkout)