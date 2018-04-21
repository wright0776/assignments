import React from 'react';
import { connect } from 'react-redux';
import { increment, stop, reset } from '../redux';

let interval;

function App(props) {
    let timer = new Date(props.timer);
    console.log(timer)
    return (
        <div className='app'>
            <div className='timerBorder'>
                <div className='timer'>
                    <h1 className='title'>Timer</h1>
                    <h2 className='time'>
                        {timer.getMinutes() < 10 ? (<div>0</div>) : null}
                        {timer.getMinutes()}:
                        {timer.getSeconds() < 10 ? (<div>0</div>) : null}
                        {timer.getSeconds()}:{timer.getMilliseconds()}
                        {timer.getMilliseconds() === 0 ? (<div>00</div>) : null}
                        <div className='space'></div>
                    </h2>
                    <button className='start' onClick={() => { clearInterval(interval); interval = setInterval(props.increment, 10) }}>Start</button>
                    <button className='stop' onClick={() => clearInterval(interval)}>Stop</button>
                    <button className='reset' onClick={props.reset}>Reset</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        timer: state
    }
}

export default connect(mapStateToProps, { increment, stop, reset })(App);
