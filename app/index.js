const express = require('express')
const app = express()

app.get('/user', (req,res)=>{
    res.send({'msg':'Microservice 4: User Said Namaste'})
})

app.get('/', (req,res)=>{
    res.send({'msg':'Hello from India'})
})

app.get('/health', (req,res)=>{
    res.send({'msg':'OK! Got it.'})
})

app.listen(3003, ()=>{
    console.log('Microservice 4 is listening at port 3003')
})
