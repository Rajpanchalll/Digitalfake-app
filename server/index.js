const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const port = 3001;
const userModel = require('./model/Users')


const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect('mongodb://127.0.0.1/crudapp')
    .then(() => console.log('Hello DB'))
    .catch((error) => console.log(error))



// app.get('/', (req, res) =>{
//     res.send('Hello World')

// })


app.get('/category', async (req, res) => {
    try {
        const items = await userModel.find(); // This fetches all items in the collection
        res.json(items);
      } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching data');
      }
})

app.post('/createusers', (req, res) => {
    userModel.create(req.body)
        .then(users => res.json(users))
        .catch(error => console.log(error))
    console.log(req.body)
})


app.listen(port, () =>{
    console.log(`Port is open on ${port}`)
})

