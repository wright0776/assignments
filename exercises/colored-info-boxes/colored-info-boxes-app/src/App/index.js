import React from "react";
import Box from "./Box/";

function App () {

    const red = {
        backgroundColor: "red",
        color: "azure",
        title: "Red",
        subtitle: "A hot color",
        info: "Red is a color at the end of the spectrum next to orange and opposite violet, as of blood, fire, or rubies."
    }
    const yellow = {
        backgroundColor: "yellow",
        color: "black",
        title: "Yellow",
        subtitle: "A happy color",
        info: "Yellow is the color between green and orange in the spectrum, a primary subtractive color complementary to blue; colored like ripe lemons or egg yolks. It can also mean cowardly or in the case of a book or newspapaer, unscrupulously sensational." 
    }
    const blue = {
        backgroundColor: "blue",
        color: "azure",
        title: "Blue",
        subtitle: "A relaxing color",
        info: "Blue is of a color intermediate between green and violet, as of the sky or sea on a sunny day. It can also refer to a mood that is melancholy, sad, or depressed."
    }
    const orange = {
        backgroundColor: "orange",
        color: "azure",
        title: "Orange",
        subtitle: "An energetic color",
        info: "Orange is a bright reddish-yellow color like that of the skin of a ripe orange."
    }
    const green = {
        backgroundColor: "green",
        color: "azure",
        title: "Green",
        subtitle: "A creative color",
        info: "Green is the color between blue and yellow in the spectrum; colored like grass or emeralds."
    }
    const purple = {
        backgroundColor: "purple",
        color: "azure",
        title: "Purple",
        subtitle: "An ambitious color",
        info: "Purple is a color intermediate between red and blue."
    }
    const black = {
        backgroundColor: "black",
        color: "azure",
        title: "Black",
        subtitle: "An absorbing color",
        info: "Black is the very darkest color owing to the absence of or complete absorption of light; the opposite of white."
    }
    const white = {
        backgroundColor: "white",
        color: "black",
        title: "White",
        subtitle: "A reflective color",
        info: "White is the color of milk or fresh snow, due to the reflection of most wavelengths of visible light; the opposite of black."
    }
    const cream = {
        backgroundColor: "blanchedAlmond",
        color: "black",
        title: "Cream",
        subtitle: "A creamy color",
        info: "Cream is a very pale yellow or off-white color."
    }
    const gray = {
        backgroundColor: "gray",
        color: "white",
        title: "Gray",
        subtitle: "A neutral color",
        info: "Gray is a color intermediate between black and white, as of ashes or an overcast sky."
    }


    return (
    <div className="main">
        <Box {...red}></Box>
        <Box {...yellow}></Box>
        <Box {...blue}></Box>
        <Box {...orange}></Box>
        <Box {...green}></Box>
        <Box {...purple}></Box>
        <Box {...black}></Box>
        <Box {...white}></Box>
        <Box {...cream}></Box>
        <Box {...gray}></Box>
    </div>
    )
}

export default App;