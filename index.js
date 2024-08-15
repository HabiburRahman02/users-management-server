const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());

const user = [
    { id: 1, name: 'Jamal', email: 'jamal@gmail.com' },
    { id: 2, name: 'Kamal', email: 'kamal@gmail.com' },
    { id: 3, name: 'Rahim', email: 'rahim@gmail.com' },
  ]
  
app.get('/users', (req,res)=>{
    console.log(user)
    res.send(user)
})

app.post('/users',(req,res)=>{
    const newUser = req.body;
    console.log(newUser)
    res.send(newUser)
})

app.get('/', (req,res)=>{
    res.send('hello server');
})

app.listen(port, ()=>{
    console.log(`user server is running on port: ${port}`)
})