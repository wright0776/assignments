import React from 'react';
import { connect } from 'react-redux';
import { removeThing } from '../redux/uglyThings';
import Thing from './Thing';

function ThingsList(props) {
    console.log(props)
    const thingComponents = props.things.map((thing, i) => <Thing key={thing.caption + i} {...thing} removeThing={props.removeThing} index={i} />)
    return (
        <div>
            {thingComponents}
        </div>
    )
}

const mapStateToProps = state => {
    return state.uglyThings;
}

export default connect(mapStateToProps, { removeThing })(ThingsList);