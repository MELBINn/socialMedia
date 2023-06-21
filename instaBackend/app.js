const express = require('express')
const mongoose = require('mongoose')
const app = express();
const port = 3000;
const cors = require('cors')
//connect mongodb

mongoose.set('strictQuery', false);

const mongoDB = "mongodb+srv://melbin:9L3MvUyu6BAevZ91@cluster0.5boijpz.mongodb.net/?retryWrites=true&w=majority";

main().then(() => console.log("mongo connected")).catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

app.use(express.json())
//setting home route

app.use(cors());

const HomeRouter = require('./postRoutes')
app.use('/home', HomeRouter)

const CreateRouter = require('./createRoute')
app.use('/create',CreateRouter)

const userRouter = require('./Signup')
app.use('/users',userRouter)

const loginRouter = require('./Login')
app.use('/login',loginRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

