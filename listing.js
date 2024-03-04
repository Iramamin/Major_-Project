const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const ListingSchema=new Schema({
    title:{type:String,required:true},
    discription:{type: String },
    image:{type:String,set:(v)=>v ==""?"https://unsplash.com/photos/a-lone-tree-in-a-field-of-yellow-flowers-0mCHGeTPqzw":v,},
    price:{type:Number},
    location:{type:String},
    country:{type:String},
});
const Listing=mongoose.model("listing",ListingSchema);
module.exports=Listing;

app.get("/testListing",async(req,res)=>{
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
});