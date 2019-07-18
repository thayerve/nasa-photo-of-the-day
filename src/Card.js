import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const StyledCard = styled.div`
    max-width: 75%;
    background-color: #004568;
    color: white;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 5px;
    `

const StyledImg = styled.img`
    max-height: 100vh;
    max-width: 95%;
    margin: 1rem auto;
    border-radius: 5px;
    `

const TextSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CardTitle = styled.h2`
    font-size: 3rem;
    margin: 1rem 0;
    font-weight: bold;
    text-shadow: 2px 1px #000000;
`
    
const CardPara = styled.p`
    margin: 1rem 2.5rem;
`

// API RESPONSE
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
          console.log('Oops! ', error);
        });
      }, []);
    if (spacePic.media_type === 'video') {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${randomDate}`)
        .then(response => {
            setSpacePic(response.data);
        })
        .catch (error => {
            console.log('Sorry, no space pic today. ', error);
        })
    }
    if (!spacePic) return <h3>Loading...</h3>;
    return (
        <StyledCard>
            <StyledImg src={spacePic.url} alt={spacePic.title}/>
            <TextSection>
                <CardTitle>{spacePic.title}</CardTitle>
                <h4>Photo date: {spacePic.date}</h4>
                <CardPara>{spacePic.explanation}</CardPara>
            </TextSection>
        </StyledCard>
    );
}

