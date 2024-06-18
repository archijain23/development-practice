const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express= require("express");
const app=express();
const path= require("path");
const methodOverride=require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'Delta_app',
    password: 'Archi2304'
  });

  let getRandomUser = ()=> {
    return [
     faker.string.uuid(),
      faker.internet.userName(),
      faker.internet.email(),
     faker.internet.password(),
   
    ];
  }

//   let q=" INSERT INTO user (id, username, email, password) VALUES ?";
// //   let users= [["123","123_archi", "jainarchi023@gmail.com","heyy"],
// //   ["124","124_ayush", "jainayush023@gmail.com","hello"]
// // ];

// let data=[];
// for(let i=1;i<=100;i++){
// data.push(getRandomUser());//100 fake userss
// }

  
//home route
  app.get("/",(req,res)=> {
    let q= 'SELECT count(*) FROM user;'
    
    try{
      connection.query(q,(err,result)=>{
          if(err) throw err
          let count=result[0]["count(*)"];
          res.render("home.ejs" ,{count});
        });
     }
    catch(err){
  console.log(err);
  res.send("some error in database");
    }
    
 
  })

  //show route
  app.get("/user",(req,res)=>{
    let q='SELECT * FROM user;'
    try{
      connection.query(q,(err,users)=>{
          if(err) throw err
        // console.log(result);
         //res.send(result);
         res.render("showusers.ejs",{users})
        });
     }
    catch(err){
  console.log(err);
  res.send("some error in database");
    }
    
  })
 


  //edit route
  app.get("/user/:id/edit", (req,res) =>{
    let {id}=req.params;
    let q= `SELECT * FROM user WHERE id='${id}'`;
   
    try{
      connection.query(q,(err,result)=>{
          if(err) throw err
          let user= result[0];
         
         res.render("edit.ejs",{user});
        });
     }
    catch(err){
  console.log(err);
  res.send("some error in database");
    }
  })

  //update route
  app.patch("/user/:id",(req,res) =>{
    let {id}=req.params;
    let{password:formpass,username: newusername}=req.body;
    let q= `SELECT * FROM user WHERE id='${id}'`;

    try{
      connection.query(q,(err,result)=>{
          if(err) throw err;
          let user= result[0];
         if(formpass!=user.password){
          res.send("wrong password");
         }else {
          let q2 = `UPDATE user SET username='${newusername}' WHERE id='${id}'`;
          connection.query(q2, (err, result) => {
            if (err) throw err;
            else {
              console.log(result);
              console.log("updated!");
              res.redirect("/user");
            }
          });
        }
         
        });
     }
    catch(err){
  console.log(err);
  res.send("some error in database");
    }
  })



 app.listen ("8080",()=>{
  console.log("server is listening to port 8080")
 })

 //try{
  //     connection.query(q,[data],(err,result)=>{
  //         if(err) throw err
  //         console.log(result);
      
  //       })
  //    }
  //   catch(err){
  // console.log(err);
  //   }
  //   connection.end();
 