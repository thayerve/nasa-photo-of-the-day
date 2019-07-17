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
    
    // console.log('props passed to Card fn: ', spacePic)
    const dates = ['2012-03-14', '2014-04-17', '2015-11-08', '2015-09-18', '2018-02-21'];
    const randomDate = dates[Math.floor(Math.random() * dates.length)];
    
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
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${randomDate}`)
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
            <h4>Photo date: {spacePic.date}</h4>
            <p>{spacePic.explanation}</p>
        </div>
    );
}

