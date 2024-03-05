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
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
//
app.get("/testListing",(req,res)=>{
 res.send("hi i am root");
});

//index rout
app.get("/listings",async(req,res)=>{
    const allListings=await Listing.find({});
    res.render("/Listings/index.ejs",{allListings});
});















/*/app.get("/testListing",async(req,res)=>{
    let sampleListing=new Listing({
        title:"My New Villa",
        discription:"By the Beach",
        price:1200,
        location:"Calangute,Goa",
        country:"india"
    });
    await sampleListing.save();
     console.log("sample was saved");
     res.send("successful testing");
    });/*/



