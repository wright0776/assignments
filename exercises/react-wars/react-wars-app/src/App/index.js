import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Swapi from "./Swapi";

function App(props) {
    return (
        <div className='app'>
            <Header />
            <Swapi />
            <Footer />
        </div>
    )
}

export default App;