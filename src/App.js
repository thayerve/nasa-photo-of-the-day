import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card"


function App() {

  return (
    <div className="App">
      <h1>Space Photo of the Day!</h1>
      <Card />
      <footer>
      <p>Courtesy of <a href='https://www.nasa.gov/'>NASA</a></p>
      </footer>
    </div>
  );
}

export default App;




// useEffect(() => {
//   axios
//     .get(`https://dog.ceo/api/breed/${breed}/images/random/15`)
//     .then(response => {
//       const doggos = response.data.message;
//       // console.log("dogs api:", doggos);
//       // KEY PART, SAVE TO STATE:
//       setPets(doggos);
//     });
// }, [breed]);