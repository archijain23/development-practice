const mongoose= require("mongoose");
const chat= require("./models/chats.js");

main()
.then(()=>{
     console.log("connection successful");
    })
.catch(err => console.log(err));
 
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');

}

let allchats=[
    {
        from:"Papa",
        to:"Archi",
        msg:"I Love you",
        created_at: new Date(),

    },
    {
        from:"Maa",
        to:"Archi",
        msg:"I LOVE YOU",
        created_at: new Date(),

    },
    {
        from:"Archi",
        to:"Anushka",
        msg:"Maths bhej de yrr",
        created_at: new Date(),

    },
    {
        from:"Mouli",
        to:"Archi",
        msg:"You are the best sister",
        created_at: new Date(),

    },
    
]

// chat.insertMany([
//     {
//     from:"Momo",
//     to:"bebo",
//     msg:"I LOVE YOU",
//     created_at: new Date(),//UTC
// },
// ])

chat.insertMany(allchats);