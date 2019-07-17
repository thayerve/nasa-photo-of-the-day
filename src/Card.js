import React, { useState, useEffect } from "react";
import axios from "axios";
import './card.css';



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

    return (
        <div className = 'card'>
            <img src={spacePic.url} alt={spacePic.title}/>
        </div>
    );
}

