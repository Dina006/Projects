const express = require("express");
const cors = require("cors");
const mysql=require("mysql")
const app = express();
const fs=require("fs");
const jwt =require('jsonwebtoken')
const multer=require("multer");
const path=require("path");
const dotenv=require('dotenv');
app.use(cors());
app.use('/public',express.static('public'));
app.use(express.json());
dotenv.config();
let PORT=process.env.PORT;
const db=mysql.createConnection({
  host:"localhost",
  port: 3306,
  user:'root',
  password:'1234',
  database:'test'
});

db.connect((err)=>{
  if(err) console.log(err);
  console.log("DB Connected Successfully");
  db.query("CREATE DATABASE if not exists test ",(err)=>{
    if(err){
      console.log(err);
    }
    else console.log("Database Created");
  });
  const values="CREATE TABLE if not exists test.register(id int AUTO_INCREMENT primary key NOT NULL,UserName varchar(255),Email varchar(255),Password varchar(255),skills varchar(255),gender varchar(255),age varchar(255),experience varchar(255),location varchar(255),mobileno varchar(255),jobname varchar(255),photo varchar(255),resume varchar(255))";
  console.log(values);
  db.query(values,(err,data)=>{
    if(err){
      console.log("error",err);
    }
    else console.log(data);
  });
//jobpost
const job="CREATE TABLE if not exists test.jobregister(id int AUTO_INCREMENT primary key NOT NULL,name varchar(255),email varchar(255),mobile varchar(255),company varchar(255),address varchar(600))";
console.log(job);
db.query(job,(err,data)=>{
  if(err){
    console.log("error",err);
  }
  else console.log(data);
});
//post
const post="CREATE TABLE if not exists test.post(id int AUTO_INCREMENT primary key NOT NULL,jobtitle varchar(255),description varchar(255),experience varchar(255),skills varchar(255),userid varchar(50),date varchar(255),location varchar(255),salary varchar(255),jobtime varchar(255),weburl varchar(255))";
console.log(post);
db.query(post,(err,data)=>{
  if(err){
    console.log("error",err);
  }
  else console.log(data);
});
});
//path.join(__dirname,'../public_html','uploades')
const storage=multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'public/images')
  },
  filename:(req,file,cb)=>{
    cb(null,Date.now()+'-'+file.originalname)
  }
});
app.post('/imageupload',(req,res)=>{

      try{
        let upload=multer({storage:storage}).single('avatar');

        upload(req,res,function(err){
              if(!req.file){
                return res.send("please select an image to upload")
              }
              else if(err instanceof multer.MulterError){
                return res.send(err);
              }
              else if(err){
                console.log(err);
              }
           else if(req.file.filename){
            console.log(req.file.filename)
           }
        });
      }
      catch(err){
           console.log(err);
      };
});



app.get("/user", (req, res) => {
  const q="SELECT*FROM test.register";
  db.query(q,(err,data)=>{
    if(err) return res.json(err);
    console.log(data);
    return res.json(data)
  });
});

app.post("/user",(req,res)=>{


  try{
    let upload=multer({storage:storage}).single('avatar');

    upload(req,res,function(err){
      // console.log(req.file)
          if(!req.file){
            return res.send("please select an image to upload")
          }
          else if(err instanceof multer.MulterError){
            return res.send(err);
          }
          else if(err){
            console.log(err);
          }
       else if(req.file.filename){
      // console.log(req.body.fullname)
      //   console.log(req.file.filename)
        const value=[
          [req.body.fullname],
          [req.body.email],
          [req.body.password],
          [req.body.skills],
          [req.body.gender],
          [req.body.age],
          [req.body.experience],
          [req.body.location],
          [req.body.mobileno],
          [req.body.jobname],
          [req.file.filename],
          [req.body.resume]
        ];
        console.log(value);
        const selec="SELECT*FROM test.register WHERE UserName=?";
        db.query(selec,[req.body.fullname],(err,data)=>{
          if(err) return res.json(err);
          console.log(data);
          if(data.length>0){
            console.log("username already exist")
            res.json({er:"username already exist"});
          }
          else{
            // res.json({msg:"Incorrect Username/Password"})
       const q='INSERT INTO test.register(UserName, Email, Password, skills, gender, age, experience, location, mobileno, jobname, photo, resume) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ;';
        // console.log(value);
        db.query(q,value,(err,data)=>{
          console.log(err);
          if(err) return res.json(err);
          console.log(data);
          console.log("Register Successfully ...");
          return res.json({suc:"Register Successfully ..."});
        })
      }
      });
       }
    });
  }
  catch(err){
       console.log(err);
  };



 
});
app.post("/login", (req, res) => {
  let secretkey=process.env.JWT_SECRET_KEY;
  // let headerkey=process.env.TOKEN_HEADER_KEY;
  const value=[
    req.body.username,
    req.body.passw
  ];
  const q="SELECT*FROM test.register WHERE UserName=? AND Password=?";
  db.query(q,value,(err,data)=>{
    if(err) return res.json(err);
    // console.log(data);
    if(data.length>0){
      jwt.sign({token:data},secretkey,(err,tokens)=>{
        if(err) console.log(err);
        console.log(tokens);
      })
      console.log({datas:{success:true,data}});
      res.json({datas:{success:true,data}});
    }
    else{
      res.json({msg:"Incorrect Username/Password"})
    }
  });
});

app.post('/jobpost',(req,res)=>{
  const value=[
    [req.body.name],
    [req.body.email],
    [req.body.mobile],
    [req.body.company],
    [req.body.address]
  ]
  console.log(value);
  const selec="SELECT*FROM test.jobregister WHERE mobile=?";
  db.query(selec,[req.body.mobile],(err,data)=>{
    if(err) return res.json(err);
    console.log(data);
    if(data.length>0){
      console.log("Mobile number already exist")
      res.json({er:"Mobile number already exist"});
    }
    else{
      // res.json({msg:"Incorrect Username/Password"})
 const q='INSERT INTO test.jobregister(name, email, mobile, company, address) VALUES (?, ?, ?, ?, ?) ;';
  // console.log(value);
  db.query(q,value,(err,data)=>{
    console.log(err);
    if(err) return res.json(err);
    console.log(data);
    console.log("Register Successfully ...");
    return res.json({suc:"Register Successfully ..."});
  })
}
});

});

app.post("/joblogin", (req, res) => {
  // let secretkey=process.env.JWT_SECRET_KEY;
  // let headerkey=process.env.TOKEN_HEADER_KEY;
  const value=[
    [req.body.mobile]
  ];
  console.log(value)
  const q="SELECT*FROM test.jobregister WHERE mobile=?";
  db.query(q,value,(err,data)=>{
    if(err) return res.json(err);
    // console.log(data);
    if(data.length>0){
      // // jwt.sign({token:data},secretkey,(err,tokens)=>{
      //   if(err) console.log(err);
      //   // console.log(tokens);
      // })
      console.log({datas:{success:true,data}});
      res.json({datas:{success:true,data}});
    }
    else{
      res.json({msg:"Incorrect mobile number"})
    }
  });
});

app.post('/jobposting',(req,res)=>{
    const values=[[req.body.jobtitle],
    [req.body.description],
    [req.body.experience],
    [req.body.skills],
    [req.body.loginid],
    [req.body.date],
    [req.body.location],
    [req.body.salary],
    [req.body.overview],
    [req.body.weburl]]
    console.log(values);
    const q='INSERT INTO test.post(jobtitle, description, experience, skills, userid, date, location, salary,jobtime, weburl) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ;';
    // console.log(value);
    db.query(q,values,(err,data)=>{
      console.log(err);
      if(err) return res.json(err);
      console.log(data);
      console.log("Posted Successfully ...");
      return res.json({suc:"Posted Successfully ..."});
    })
});

app.post("/alljob", (req, res) => {
  const value=[req.body.loginid];
  console.log(value)
  const q="SELECT*FROM test.post WHERE userid=? ";
  db.query(q,value,(err,data)=>{
    if(err) return res.json(err);
    console.log(data);
    if(data.length>0){
      console.log({data:data});
      res.json({data:data});
    }
  });
});
app.get("/jobs", (req, res) => {
  const q="SELECT*FROM test.post";
  db.query(q,(err,data)=>{
    if(err) return res.json(err);
    console.log(data);
    return res.json(data)
  });
});

app.put('/update',(req,res)=>{
   const value=[
    [req.body.email],
    [req.body.age],
    [req.body.jobname],
    [req.body.mobileno],
    [req.body.location],
    [req.body.skills],
    [req.body.experience],
    [req.body.id]
   ]
   console.log(value);
   res.json({update:'update successfully ...'});
   const updat=`UPDATE test.register SET Email=? ,age=?, jobname=?, mobileno=?, location=?, skills=?, experience=? WHERE id = ?`
// const updat='UPDATE test.register SET jobname=? WHERE id =?'
   db.query(updat,value,(err,data)=>{
    console.log(data);
    if(err) console.log(err);
    if(data){
      res.json({update:'update successfully ...'});
    }
   })
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

