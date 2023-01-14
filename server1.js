const express = require("express");
const app = express();
const {Pool} = require("pg");


const pool = new Pool({
    user: 'amanda',
    host: 'localhost',
    database: 'cyf_hotels',
    password: '',
    port: 5432
})

app.get("/hotels", function(req, res){
    pool.query('SELECT * FROM hotels')
})

app.listen(3000, () => console.log("Server is up and running"))