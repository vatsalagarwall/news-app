import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import logotransparent from './logotransparent.png'
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
  
function Sports() {
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


    const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?q=Sports&apiKey=4a3ba8f9447a4f41a9850cd9eb3db372`)
      .then((res) => {
        console.log(res.data.articles);
        setNews(res.data.articles);
      });
  }, []);
  return (
    <>
       <Navbar currentLocation= {currentLocation} currentDate={currentDate} navigate={navigate} />
    <ButtonNavbar navigate={navigate} />
     <div className='container my-5'>
        <div className="row text-center">
        <h2><b>Top Sports Headlines</b></h2>
          {
            news.map((news)=>{
              return(
                <div className='col'>
                  <div className="card" style={{width: "18rem", height: "23rem", margin:"10px"}}>
                  <img className={`card-img-top ${news.urlToImage ? '' : 'logo-image'}`} src={news.urlToImage || logotransparent}alt='Image not available'/>
                    <div className='card-body'>
                      <h5 className='card-title' style={{fontSize:'large',fontFamily:'PT Sans', fontWeight:'bold'}}>{news.title}</h5>
                      {/* <p className="card-text">{news.description}</p> */}
                      <a href={news.url} className="btn btn-primary">Read More</a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>      
      </div>


    </>
  )
}

export default Sports