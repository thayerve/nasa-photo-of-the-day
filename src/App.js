import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `

function App() {

  return (
    <Wrapper>
      <Header />
      <Card />
      <Footer />
    </Wrapper>
  );
}

export default App;



