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
        padding:'auto',
        margin:'auto',
        borderRadius: '4px',
        position:'relative',
    }
    const app = {
      position:'relative',
      height:'100%',
      width:'100%',
    }

    return (
        <div style={app}>
            <canvas style={canvas} id="myChart"/>
        </div>
  
    )
}
  
export default Dashboard