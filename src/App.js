import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card"

// RESPONSE
// data:
  // date: "2019-07-17"
  // explanation: "(string)"
  // media_type: "video"
  // service_version: "v1"
  // title: "Apollo 11: Descent to the Moon"
  // url: "https://www.youtube.com/embed/xc1SzgGhMKc?start=850"

function App() {

  
  

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Card />
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