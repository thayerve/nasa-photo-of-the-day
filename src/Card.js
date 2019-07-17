import React, { useState, useEffect } from "react";
import axios from "axios";

// RESPONSE
// data:
  // date: "2019-07-17"
  // explanation: "(string)"
  // media_type: "video"
  // service_version: "v1"
  // title: "Apollo 11: Descent to the Moon"
  // url: "https://www.youtube.com/embed/xc1SzgGhMKc?start=850"


export default function Card() {
    const [spacePic, setSpacePic] = useState({});
    console.log('props passed to Card fn: ', spacePic)

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(response => {
          // console.log('NASA APOD data: ', response)
          setSpacePic(response.data);
        })
        .catch(error => {
          console.log('Oops! ', error)
        });
      }, []);
    if (spacePic.media_type === 'video') {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14`)
        .then(response => {
            setSpacePic(response.data)
        })
        .catch (error => {
            console.log('Sorry, no space pic today. ', error)
        })
    }
    if (!spacePic) return <h3>Loading...</h3>;
    return (
        <div className = 'card'>
            <img src={spacePic.url} alt={spacePic.title}/>
            <h2>{spacePic.title}</h2>
            <p>{spacePic.explanation}</p>
        </div>
    );
}

