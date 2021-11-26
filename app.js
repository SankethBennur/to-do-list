const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var toDoList = [
    "Wake up and Freshen up",
    "Running + Exercise",
    "Work",
    "Breakfast",
    "Emails",
    "Break"
];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
// used to fetch name parameter from HTML elements
// for fetching post requests from req.body.name property

// Creating a Mongoose Schema
// const toDoListSchema = new mongoose.Schema(
//     {itemEntry: String}
// );

// var toDoList = mongoose.model('ToDo', toDoListSchema);



// ------------------------------------------- //

// All HTTP Get-Post Requests
app.get('/', (req, res) => {
    res.render('index.ejs', {toDoList: toDoList});
}); 

app.post('/newtodo', (req, res) => {
    var item = req.body.newItem;
    console.log(`New Item Submitted: ${item}`); // may require returning something to end execution.
    toDoList.push(item);
    res.redirect('/');
    // required only to redirect to '/', render index.ejs to show changes.
    // Or else, page will try to fetch '/newtodo' and will fail.
});



// ------------------------------------------------------- //

// HTTP Server listening at available port in host environment
const port = (process.env.PORT) || 3000;

app.listen(port, () => {
    console.log(`Listening on PORT ${port}`);
});