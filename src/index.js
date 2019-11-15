import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const cookieParser = require('cookie-parser');

// // const app = express();
// // app.use(bodyParser.urlencoded({ extend:true }));
// // app.use(bodyParser.json());
// // app.use(cookieParser());

// // app.post("/api/sendMail", (req, res) => {
// //     console.log(req.body)

// })




// app.listen(5000, () => {
//     console.log("server Running at 5000");
// })