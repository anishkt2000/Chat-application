import React from "react";
import { useNavigate } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";
import styled from "styled-components";
import axios from "axios";

export default function LogOut() {
  const navigate = useNavigate();

  const handleclick = async () => {
    const id = await JSON.parse(localStorage.getItem("chat-app-user"))._id;
    const data = await axios.get(`{logOutRoute}/${id}`);
    if (data.status == 200) {
      localStorage.clear();
      navigate("/login");
    }
  };
  return (
    <Button className="logoutButton" onClick={handleclick}>
      <BiPowerOff />
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #9a86f3;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }
  svg:hover {
    color: blue;
  }
`;
