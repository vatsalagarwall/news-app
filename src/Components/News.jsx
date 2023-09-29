import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './News.css';
import logotransparent from './logotransparent.png'

function News() {
  const [news, setNews] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

 
  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=4a3ba8f9447a4f41a9850cd9eb3db372`)

      .then((res) => {
        console.log(res.data.articles);
        setNews(res.data.articles);
      });
  }, []);

  function searchNews() {
    axios
      .get(`https://newsapi.org/v2/everything?q=${searchInput}&apiKey=4a3ba8f9447a4f41a9850cd9eb3db372`)

      .then((res) => {
        console.log(res.data.articles);
        setSearchResults(res.data.articles);
      });
  }

  return (
    <>
      <div className='container my-5'>
        <div className='row text-center'>
          <input type='text' className='input-news form-control' placeholder='Search news here' onChange={(e) => setSearchInput(e.target.value)} />
          <button  className='search-news btn btn-primary' onClick={() => searchNews()} disabled={!searchInput.trim()}>Search</button>
        </div>
      </div>

      <div className='container my-5'>
        <div className='row text-center'>
          {searchResults.length > 0
            ? searchResults.map((searchItem) => (
                <div className='col' key={searchItem.title}>
                  <div className='card' style={{ width: '18rem', height: '23rem', margin: '10px' }}>
                  <img className={`card-img-top ${searchItem.urlToImage ? '' : 'logo-image'}`} src={searchItem.urlToImage || logotransparent}alt='Image not available'/>
                    <div className='card-body'>
                      <h5 className='card-title' style={{fontSize:'18px',fontFamily:'PT Sans', fontWeight:'bold'}}>{searchItem.title}</h5>
                      {/* <p className='card-text'>{(searchItem.description)}</p> */}
                      <a href={searchItem.url} className='btn btn-primary'>
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              ))
              
            : news.map((newsItem) => (
                <div className='col' key={newsItem.title}>
                  <div className='card' style={{ width: '18rem', height: '27rem', margin:'10px' }}>
                    
                    <img className={`card-img-top ${newsItem.urlToImage ? '' : 'logo-image'}`} src={newsItem.urlToImage || logotransparent}alt='Image not available'/>
                    <div className='card-body'>
                      <h5 className='card-title' style={{fontSize:'18px', fontFamily:'PT Sans', fontWeight:'bold'}}>{newsItem.title}</h5>
                      {/* <p className='card-text'>{newsItem.description}</p> */}
                      <a href={newsItem.url} className='btn btn-primary'>
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
}

export default News;

