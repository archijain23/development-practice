const mongoose= require("mongoose");
const {Schema}= mongoose;

main()
.then(()=>console.log("connection successful"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');

  
}


const userSchema= new Schema({
    username:String,
    addresses:[
        {
            _id:false,
            location:String,
            city:String,
        }
    ],

})

const user=mongoose.model("user",userSchema);

const addusers=async()=>{
    let user1=new user({
        username:"sherlockhomes",
        addresses:[
            {
           
             location:"221B Baker street",
            city:"london"},
           
        ]
    })
    user1.addresses.push( {location:"P32 wallstreet",city:"london"})
let result=await user1.save();
console.log(result);
}

addusers();