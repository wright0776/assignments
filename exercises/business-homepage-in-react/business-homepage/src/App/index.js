import React from "react";
import Nav from "./Nav/";
import navCont from "./content/navCont.json";
import Info from "./Info/";
import infoCont from "./content/infoCont.json";
import Product from "./Product/";
import productCont from "./content/productCont.json";
import Footer from "./Footer/";
import footerCont from "./content/footerCont.json";

function App() {

    return (
        <div className="main">
            <Nav {...navCont}></Nav>
            <Info {...infoCont}></Info>
            <div className="products">
                <Product {...productCont.products[0]}></Product>
                <Product {...productCont.products[1]}></Product>
                <Product {...productCont.products[2]}></Product>
                <Product {...productCont.products[3]}></Product>
            </div>
            <Footer {...footerCont}></Footer>
        </div>
    )
}

export default App;