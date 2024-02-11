import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const setname = async () => {
      setUserName(
        await JSON.parse(localStorage.getItem("chat-app-user")).username
      );
    };

    setname();
  }, []);
  return (
    <Container>
      <img src={Robot} alt="" />
      <h1>
        Greetings, <span>{userName}!</span>
      </h1>
      <h3>Initiate Conversation by Selecting a User</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  background-color: black;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;
