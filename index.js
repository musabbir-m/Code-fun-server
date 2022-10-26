const express= require('express')
const app= express()
const port= process.env.PORT || 5000;
const cors=require('cors')
app.use(cors())

const categories= require('./data/courses.json')
app.get('/', (req,res)=>{
    res.send('check the api to load data')
})

app.get("/courses", (req, res) => {
    res.send(categories);
  });

  app.get('/courses')

app.listen(port, ()=>{
    console.log('server running', port);
})