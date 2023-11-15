import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import react,  {useState, useEffect } from 'react';


function App() {

  
  const [prices, setPrices]= useState([])

 useEffect (() => {
  const fetchData = async () => {
    const response = await fetch ('/Get_prices');
    const data = await response.json()
    setPrices(data.prices)
  
  };

  fetchData();

 },[]
);   

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(); // Adjust the format as needed
};


 

  

  
    return (
      <div className="App">
      <ul className="price-list"> {prices.map((item, index)=> (
        <li key = {index}>
          <h1>{item.price}</h1>
          <p>Start Date: {formatDate(item.startDate)}</p>
            <p>End Date: {formatDate(item.endDate)}</p>
        </li>
      ))}
      </ul>
      </div>
    );
    
}

export default App;