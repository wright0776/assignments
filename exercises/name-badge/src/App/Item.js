import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        }
    }

    showMenu = (e) => {
        e.preventDefault()
        // console.log(this.state.showMenu)
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        })
    }

    closeMenu = (e) => {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        })
    }

    render() {
        // console.log(this.props)
        const { firstName, lastName, email, placeOfBirth, phone, favoriteFood, removeBadge, index } = this.props;
        return (
            <div className='newBadge'>
                <span className='badgeTitle'>Badge
                    <div className='dropDown'>
                        <button onClick={this.showMenu} className='dropButton'>&#9776;</button>
                        {this.state.showMenu ? (
                            <div className='dropContent'>
                                <button onClick={() => removeBadge(index)} className='remove'>Remove</button>
                                {/* <button onClick={() => editBadge(index)} className='edit'>Remove</button> */}
                            </div>
                        ) : null}
                    </div>
                </span>
                <div className='badgeCont'>
                        <h2>{firstName} {lastName}</h2>
                        <div className='titledCont'>
                            <h4>Email:</h4>
                            <p>{email}</p>
                            <h4>Place of Birth:</h4>
                            <p>{placeOfBirth}</p>
                            <h4>Phone:</h4>
                            <p>{phone}</p>
                            <h4>Favorite Food:</h4>
                            <p>{favoriteFood}</p>
                        </div>
                </div>
            </div>
        )
    }
}

export default Item;