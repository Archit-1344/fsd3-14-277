import http from "http";
//import * as team from "./teams.js" ;

import { getAllTeams } from "./teams.js" ;

const PORT = 5000 ;

const sendJson = (res , statusCode , data) => {
    res.writeHead(statusCode , {"Content-Type" : "application/json"}) ;
    res.end(data === "Undefined" ? "" : JSON.stringify(data)) ;
} ;

const parseJSONBody = (req) => {
    new Promise ((resolve , reject) => {
        let body = "" ;
        req.on("data" , (chunk) => {
            body += chunk.toString() ;
        }) ;
        req.on("end" , () => {
            try{
                const data = JSON.parse(body) ;
                resolve(data) ;
            }catch(error){
                reject(error) ;
            }
        }) ;
    }) ;
} ;
const server = http.createServer((req , res)=>{
    
}) ;

server.listen(PORT, () => {
    console.log("server is running at" , PORT) ;
}) ;