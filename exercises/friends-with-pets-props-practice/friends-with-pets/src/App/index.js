import React from "react";
import friends from "./friends.json";
import FriendList from "./FriendList/";

function App() {
    return (
        <div>
            {friends.friends.map((x, i) =>
                <FriendList key={x.name + i} data={x} />
            )}
        </div>
    )
}

export default App;