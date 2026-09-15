import express from 'express';

const app =express() ; 
app.get("/about ", (req, res) => {
    res.send("<h1>Hello, Express</h1>");
});

app.use("*" , (req, res) => {
    res.send("Route not found ")    ;
}) ;
app.listen(3000, () => console.log("Server is running on port 3000"));