/*
Objective
In this checkpoint, we are going to create a web application that contains three pages:

Home page.
Our Services.
Contact us.
These pages should follow the next requirements: 

Each page should contain a nav bar link (Home, Our Services, Contact us).
Feel free to put any content you want.
The web application is only available during working hours (Monday to Friday,  from 9 to 17).
Instructions
Use Express to create the server and handle routes.
Create a custom middleware to verify the time of the request.
The pages should be styled with CSS.
Optionally, you can use any template engine you want.

*/


const express = require('express')
const available=require('./middleware/available')
const path = require('path');
const app = express()
//middleWare Static folder
const PORT = process.env.PORT || 5000;
app.use(available);
app.use(express.static(path.join(__dirname,"/public")))
app.listen(PORT,(err)=>{
        if (err)  {throw (err)}
    else console.log(`the server listening at :http://localhost: ${PORT}...`)
})




