import React from 'react';
import {connect} from 'react-redux';
import {removeBadge} from '../redux/badges';
import Item from './Item';

function List (props) {
    // console.log(props)
    const badgeComponents = props.data.map((badge,i) =>
        <Item key={badge.firstName + i}{...badge} removeBadge={props.removeBadge} index={i} />)
        return (
            <div className='badges'>
                {badgeComponents}
            </div>
        )
}

const mapStateToProps = state => {
    return state.badges;
}

export default connect(mapStateToProps, {removeBadge})(List);