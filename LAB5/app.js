import express from 'express';

const app =express() ; 
app.get("/about ", (req, res) => {
    res.send("<h1>Hello, Express</h1>");
});


// app.listen(3000, () => console.log("Server is running on port 3000"));

app.get('/about' , (req, res) => {
    res.send("<h1>We are FSD developer</h1>");
}) ;




app.post('/login' , (req, res) => {
    res.send({msg : 'user logged in successfully'}) ;
}) ;

app.put('/update ' , (res,req) =>{
    res.send({msg : 'user  update successfully'}) ;
}) ;

app.delete('/user/delete/1' , (req,res) => {
    res.send({msg : 'user deleted successfully'}) ;
}) ;

app.use((req,res)=>{
    res.send("Not found")
})

app.listen(3333 , () => console.log("Server is running on port 3333"));