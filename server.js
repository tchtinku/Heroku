const express = require("express"); //importing express
const app = express();//making express object
const port = process.env.PORT || 5000;

// const port = 5000;

// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://taskUser:taskUser@cluster0.wrumb.mongodb.net/MyDatabase?retryWrites=true&w=majority', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("hurray! we connected");
});
app.listen(port, function(){
    console.log('Server is running on port ${port}');
});
app.get('/homepage', (req, res )=>{
     res.send("Yay!!!");
});
app.use(express.json());
const userTaskRoute=require("./routes/user_task");
app.use("/userTask", userTaskRoute);