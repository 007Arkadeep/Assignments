import React, {useState} from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import Axios from 'axios';
const Chart = require('chart.js');
  
const Dashboard = () => {
    //const history = useHistory();


    let dataObj;

    const fetchData = async(e)=>{
      return new Promise(async(resolve,reject)=>{

      
      const response=await Axios('http://localhost:4000/').then((doc)=>{
    console.log(doc.data);
    dataObj = doc.data;
  });
  console.log(response);
  resolve();
});
    }
    useEffect(async () => {
      await fetchData();
    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: "pie",
      data: dataObj
    });
  });
    const canvas = {
        padding:'0.5rem',
        margin:'0.8rem',
        borderRadius: '4px'
    }
    return (
        <div className="App">
            <canvas id="myChart" width="400" height="400" />
        </div>
  
    )
}
  
export default Dashboard