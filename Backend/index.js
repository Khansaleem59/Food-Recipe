const express = require('express');
const app = express(); //initialize express app
const port = 5000;
// const userRouter = require('./router/userRouter');
// const productRouter = require('./router/productRouter');
const cors = require('cors')

const userRouter = require('./routers/userRouter');
const recipeRouter = require('./routers/recipeRouter');


//MIddleware
app.use(express.json());
app.use(cors());

app.use('/user',userRouter);
app.use('/recipe',recipeRouter);

//routes
app.get('/',(req,res) => {
res.send('Response from express server')
});

//starting the express server
app.get('/add',(req,res) =>{
    res.send('response from add route')
});

app.get('/delete',(req,res) =>{
    res.send('response from delete route')
});

app.listen(port, () => {
    console.log('server started ');
});
