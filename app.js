//code for connection to local host and acquiring mongo ,express etc(Basic setup).
const express = require ("express");
const mongoose=require("mongoose");
const app = express();
const path=require("path");
const Listing=require("./models/listing.js");
app.listen(8080,()=>{
    console.log("server is listening to port 8080");
});
//basic api 
app.get("/",()=>{
    console.log("welcome to port");
});
main()
.then(()=>{
console.log("connection sucussful");
})
.catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}
//
app.get("/testListing",(req,res)=>{
 res.send("hi i am root");
});



