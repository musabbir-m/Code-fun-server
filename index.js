const express= require('express')
const app= express()
const port= process.env.PORT || 5000;
const cors=require('cors')
app.use(cors())

const coursedetails= require('./data/coursedetails.json')
const courses= require('./data/courses.json')

app.get('/', (req,res)=>{
    res.send('check the api to load data')
})

app.get("/allcourses", (req, res) => {
    res.send(courses);
  });

  app.get("/courses", (req,res)=>{
    res.send(coursedetails)
  })

  app.get('/courses/:id', (req, res)=>{
    const id = req.params.id 
    const singleCourse= coursedetails.find(course=>course.id===id)
    console.log(req.params.id);
    res.send(singleCourse)
  })

app.listen(port, ()=>{
    console.log('server running', port);
})