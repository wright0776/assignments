import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Services from './pages/Services.js';

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header />
            <div className='content-wrapper'>
                <Switch>
                    <Route path='/' component={Home}/>
                    <Route path='/about/' component={About}/>
                    <Route path='/services/' component={Services}/>
                </Switch>
            </div>
            <Footer />
        </div>
    )
}

export default App;