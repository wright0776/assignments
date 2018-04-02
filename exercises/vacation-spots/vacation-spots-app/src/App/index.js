import React from "react";
import Cards from "./Cards/";

function App () {

    let vacationSpots = [
        {
            place: "Negril, Jamaica",
            price: 40,
            timeToGo: "Spring",
            imgUrl: "https://images.unsplash.com/photo-1504982692992-f66b2dbd2f95?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8243c6f8f2a708cb70366d5994463c01&auto=format&fit=crop&w=1050&q=80",
            altText: "Negril, Jamaica"
        }, {
            place: "Matamata, New Zealand",
            price: 900,
            timeToGo: "Winter",
            imgUrl: "https://images.unsplash.com/photo-1462759353907-b2ea5ebd72e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5ac9dc08a489dd5a9b7d67396dc337ee&auto=format&fit=crop&w=1189&q=80",
            altText: "Matamata, New Zealand"
        }, {
            place: "Ninh Bình, Vietnam",
            price: 1200,
            timeToGo: "Fall",
            imgUrl: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=12f109320bea5e6d3377eb06fab55444&auto=format&fit=crop&w=1117&q=80",
            altText: "Ninh Bình, Vietnam"
        }, {
            place: "Venice Beach, California",
            price: 1100,
            timeToGo: "Summer",
            imgUrl: "https://images.unsplash.com/photo-1504731231146-c0f65dc6a950?ixlib=rb-0.3.5&s=407287cd964e10238007646f1799655a&auto=format&fit=crop&w=634&q=80",
            altText: "Venice Beach, California"
        }, {
            place: "Iceland",
            price: 400,
            timeToGo: "Spring",
            imgUrl: "https://images.unsplash.com/photo-1506447529978-88238903af49?ixlib=rb-0.3.5&s=d58e83e581ad106dc4ba08f842eed797&auto=format&fit=crop&w=1050&q=80",
            altText: "Iceland"
        }
    ]

    return (
        <div>
            <h1>Matt's Vacation Spots</h1>
            <Cards spots = {vacationSpots}></Cards>
        </div>
    )
}

export default App;