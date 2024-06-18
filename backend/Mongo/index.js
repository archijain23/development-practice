const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("connection succesful"); 
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

const userSchema= new mongoose.Schema({
    name:String,
    email: String,
    age:Number,
})

const User= mongoose.model("User",userSchema);

const user1= new User({
    name:"Archi",
    email:"jainarchi023@gmail.com",
    age:20,

})

// user1.save();
// const user2= new User({
//     name:"Arya",
//     email:"jainarya023@gmail.com",
//     age:13,

// })

// user1.save()
// .then((res)=> {
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

User.insertMany([
    {name:"Tony", email:"tony@gmail.com" , age:50},
    {name:"Peter", email:"Peter@gmail.com" , age:47},
    {name:"Bruce", email:"Bruce@gmail.com" , age:50}
]).then((res)=>{
    console.log(res);
})