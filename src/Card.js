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
    max-height: 95vh;
    max-width: 95%;
    margin: 1rem auto;
    border-radius: 5px;
    `
const StyledIframe = styled.iframe`
    height: 95vh;
    width: 95%;
    margin: 1rem auto;
    border-radius: 5px;
    align-self: center;
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
  // media_type: "video" (or "image")
  // service_version: "v1"
  // title: "Apollo 11: Descent to the Moon"
  // url: "https://www.youtube.com/embed/xc1SzgGhMKc?start=850"


export default function Card() {
    const [spacePic, setSpacePic] = useState({});
       
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(response => {
          console.log('NASA APOD data: ', response)
          setSpacePic(response.data);
        })
        .catch(error => {
          console.log('Oops! ', error);
        });
      }, []);

    if (!spacePic) return <h3>Loading...</h3>;
    if (spacePic.media_type === 'video') {
        return (
            <StyledCard>
                <StyledIframe src={spacePic.url} allowfullscreen />
                <TextSection>
                    <CardTitle>{spacePic.title}</CardTitle>
                    <h4>Photo date: {spacePic.date}</h4>
                    <CardPara>{spacePic.explanation}</CardPara>
                </TextSection>
            </StyledCard>
            
            );
            
    } else {
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
}


