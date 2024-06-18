const mongoose= require("mongoose");
const {Schema}= mongoose;

main()
.then(()=>console.log("connection successful"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');

}

const userSchema=new Schema({
    username:String,
    email:String,
});

const postSchema= new Schema({
    content:String,
    likes:Number,
    user:{
        type:Schema.Types.ObjectId,
        ref:"user"
    }
})

const user= mongoose.model("user", userSchema);
const post= mongoose.model("post",postSchema);

// const addData= async ()=>{
//     // let user1=new user({
//     //     username:"Rahulkumar",
//     //     email:"rahul@gmail.com"
//     // });
//     // let post1=new post({
//     //     content:"helloworld",
//     //     likes:7,
//     // });

//     let user2 = await user.findOne({username:"Rahulkumar"});
//     let post2=new post({
//         content:"bye bye:)",
//         likes:23,
//     });

//     // post1.user=user1;
//     post2.user=user2;

//     // await user1.save();
//     // await post1.save();
//     await post2.save();
// }
// addData();

const getData= async ()=>{
    let result =await post.findOne({}).populate("user");
    console.log(result);
}

getData();