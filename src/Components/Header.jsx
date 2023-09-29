import React, { useState, useEffect } from 'react';
import News from './News';
import { useNavigate } from 'react-router-dom';
import logotransparent from './logotransparent.png';
import axios from 'axios';
import Navbar from './Navbar';
import ButtonNavbar from './ButtonNavbar';


function getDate() {
  const today = new Date();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = daysOfWeek[today.getDay()];
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${day}, ${date}/${month}/${year}`;
}

function Header() {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(getDate());
  const [currentLocation, setCurrentLocation] = useState({})
  useEffect(()=>{
    getLocation()
  },[])

  const getLocation = async()=>{
    const location = await axios.get('https://ipapi.co/json')
    setCurrentLocation(location.data)
  }

  return (
    <>
     <Navbar currentLocation= {currentLocation} currentDate={currentDate} navigate={navigate} />
    <ButtonNavbar navigate={navigate} />
      <News />
    </>
  );
}

export default Header;
