import React from "react";
import NavBar from "./components/Navbar";

const styles = {
    backgroundImage: "url(https://picsum.photos/id/1016/2200)",
    backgroundRepeat: "no-repeat",
    "-webkit-background-size": "cover",
    "-moz-background-size": "cover",
    "-o-background-size": "cover",
    backgroundSize: "cover",
    minHeight: "100vh",
    display:"flex",
    justifyContent:"center"
}
const App = () => {

    return (
      <div style={styles}>
        <NavBar/>
      </div>
    );
}

export default App;
