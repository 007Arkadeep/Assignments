const express = require('express');
const app = express();
const cors = require('cors');
const corsHandeler=cors({origin:true});

const port = process.env.PORT || 4000;
app.get('/', (req, res) => {
    corsHandeler(req, res, () => {
  console.log('Server root endpoint hitted');
  let dataSample = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "Red",
              "Blue",
              "Yellow",
              "Green",
              "Purple",
              "Orange"
            ],
            borderColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            borderWidth: 1
          }]
      }
  res.send(dataSample);
    })
})

app.listen(port,()=>{console.log(`Listening on port: ${port}`)})