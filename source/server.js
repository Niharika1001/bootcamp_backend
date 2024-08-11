// import http from 'http'

// const port = 4000;

// const server = http.createServer((req, res) => {

//     res.statusCode = 200
//     res.setHeader("Content-Type", "text/plain");
//     res.write("My team name is AST team\n")
//     res.write("what are you doing\n")
//     res.end()
//     if (req.url === '/myself') {
//         res.statusCode = 200
//         res.setHeader("Content-Type", "text/plain");
//         res.setHeader("Content-Type", "text/plain");
//         res.write(`RESUME
        
//         Personal Details
//         Name : Praveena Niharika Thivari
//         Email : thivariniharika@gmail.com
//         Phone : 8029628999
        
//         Skills : HTML, CSS , JAVA SCRIPT, DS, C
        
//         Education : 
//             CSE(2023-2027) 
//             SRKR Engineering College
//             Intermediate(2021-2023)
//             Aditya Jr College
//             SSC (2020-2021)
//             Sri ViswaSanthi E.M School
        
//         Strengths : Good Communication Skills , Adaptability , Team Work
        
//         Languages Known : Telugu , Hindi , English
//         `);
        


//         res.end()
//     }

//     else if (req.url === '/html') {
//         res.statusCode = 200
//         res.setHeader("Content-Type", "text/html");
//         res.write("<h1 style='color:red;font-size:30px;text-align:center'><i>Hello Wanna see my resume.??</i></h1>");
//         res.write(`<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Resume</title>


// <style>
      
//       *{
//     box-sizing: border-box;
//     margin:0;
//     padding:0;
//     font-family: montserrat;
// }
// body{
//   background-color: aqua;
// }
// .container{

//   background: #fff;
//   max-width: 750px;
//   margin:60px auto;
//   height: 1200px;
//   padding: 20px;
//   box-shadow: 0 2px 20px rgba(0,0,0,0,3);

// }
// .header{
//   text-align: center;
// }
// .header h1{
//   margin-bottom: 2px;
// }
// .header h3{
//   text-transform: uppercase;
// }
// .img-area{
//   width: 200px;
//   height:200px;
//   border-radius: 50%;
//   overflow:hidden;
//   margin:25px auto;
//   border:15px groove deepskyblue;
//   border-radius: 50%;
// }
// .img-area img{
//   width:100%;
// }
// .main{
//   display: flex;
//   padding: 30px;
// }
// .left p{
//   line-height:2;
// }
// .left ul li{
//   line-height: 2;
// }
// h2{
//   background: #00b6c4;
//   padding: 15px;
//   color: #fff;
//   margin:30px 0;
//   font-size: 20px;
//   border-radius: 0 50px 50px 0;
// }
// .right{
//   font-display: right;
//   flex:1;
//   padding:25px 15px 15px 50px;
// }
// .right h3{
//   margin-bottom: 15px;
// }
// .right p{
//   line-height: 3.0;
// }
// .right ul li{
//   line-height: 2;
// }

// ul{
//    align-items: center;
// }
// h1{
//     font-family: italic;
// }
// span{
//     color:red;
// }
// </style>


// </head>
// <body>
//     <div class="container">
//         <div class="header">
//           <div class="img-area">
//             <img src=" https://i.ibb.co/vhB7gtv/IMG-20240806-231255.jpg " height="200px" width="200px">
      
//           </div>
//           <h1><i>Praveena Niharika Thivari</i></h1>
//           <h3><span>Web</span> Developer</h3>
//         </div>
//         <div class="main">
//           <div class="left">
//             <h2>Personal Information</h2>
//             <p><strong>Name: </strong>T.Praveena Niharika</p>
//             <p><strong>Email: </strong>thivariniharika@gmail.com</p>
//             <p><strong>Phone: </strong>8029628999</p>
//             <p><strong>LinkedIn : </strong> Praveena Niharika Thivari</p>
//             <h2>Skills</h2>
//             <ul>
//               <li>HTML</li>
//               <li>CSS</li>
//               <li>Java script</li>
//               <li>Data structure</li>
//               <li>C</li>
              
//             </ul>
//             <h2>Education</h2>
//             <h3>Computer Science and Engineering</h3>
//             <p>SRKR Engineering College, 2023-2027,Bhimavaram</p>
//             <h3>Intermediate</h3>
//             <p>Aditya Jr college, 2021-2023,Bhimavaram</p>
//             <h3>SSC</h3>
//             <p>Sri Viswasanthi E.M. School, 2020-2021, Bhimavaram</p>
//             </div>
//             <div class="right">
//               <h2>Strengths</h2>
//               <ul>
//              <li> <p><b>Good communication skills</b></p></li>
//             <P>Can communicate with others effectively</P>
//           <li><p><b>Adaptability</b></p></li>
//             <p>Can adapt to situations</p>
//             <li><p><b> Team work</b></p></li>
//             <p>I can be both team player or team lead</p>
//             </ul>
//             <h2>Languages Known</h2>
//             <div class="lang">
//             <ul >
//               <li>Telugu</li>
//               <li>Hindi</li>
//               <li>English</li>
//             </ul>
//             </div>
//             </div>
// </body>
// </html>`)
//         res.end()
//     }

//     else if (req.method === 'POST' && req.url === '/recivedata') {
//         res.statusCode = 200
//         res.setHeader("Content-Type", "application/json");
//         let body = "";
//         req.on("data", (chunk) => {
//             body += chunk.toString();
//         });
//         console.log(body)
//         res.end()
//     }

//     else if (req.url === '/senddata') {
//         res.statusCode = 200
//         res.setHeader("Content-Type", "application/json");
//         const data = ([{ Name: "Niharika", Email: "thivariniharika@gmail.com", phone: 8029628999, LinkedIn: "Praveena Niharika Thivari" }, { Skills: "HTML , CSS , JAVA SCRIPT , DS, C" }, { Education: "CSE(2023-2027),Intermediate(2021-2023),SSC(2020-2021)" }, { Strengths: "Good Communication Skills,Adaptability,Team Work" }, { languagesKnown: "Telugu,Hindi,English" }])
//         res.end(JSON.stringify(data))
//     }

//     else {
//         res.statusCode = 400
//         res.end("Page Not Found\n")
//     }
// });

// server.listen(port, () => {
//     console.log(`Server running at ${port}`);
// });






import cors from 'cors';
import express from 'express';
import { connectToDB,db } from "./db.js";

const app = express()

app.use(express.json())




app.post('/insertOne', async(req, res) => {
    await db.collection("harika").insertOne(req.body)
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})

// app.post('/insert', async(req, res) => {
    
//     await db.collection("harika").insertOne({Name:req.body.name,Team:req.body.team})
//     .then((result)=>{
//         res.json(result)
//     }).catch((e)=>console.log(e))
 
// })

app.post('/insertmany', async(req, res) => {
    await db.collection("harika").insertMany(req.body)
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})


app.post('/findone', async(req, res) => {
    await db.collection("harika").findOne({Name:"ROSHAN"})
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})


app.post('/findmany', async(req, res) => {
    await db.collection("harika").find().toArray()
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})
app.post('/findcase1', async(req, res) => {
    await db.collection("harika").find({Age:{$exists:false}}).toArray()
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})

app.post('/findcase2', async(req, res) => {
    await db.collection("harika").find({Age:{$eq:"60"}}).toArray()
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})

app.post('/findcase3', async(req, res) => {
    await db.collection("harika").find({Age:{$gte:"20"}}).toArray()
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})

app.post('/updateone', async(req, res) => {
    await db.collection("harika").updateOne({Name:"ROSHAN"},{$set:{Salary:50000}})
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})

// app.post('/updateone', async(req, res) => {
//     await db.collection("harika").findOneAndUpdate({Name:"teja"},{$set:{Age:20}})
//     .then((result)=>{
//         res.json(result)
//     })
//     .catch((e)=>console.log(e))
// })

app.post('/updatemany', async(req, res) => {
    await db.collection("harika").updateMany({Age:{$gt:"18"}},{$set:{Age:25}})
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})

app.post('/deleteone', async(req, res) => {
    await db.collection("harika").deleteOne(req.body)
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})

app.post('/deletemanyor', async(req, res) => {
    await db.collection("harika").deleteMany({$or:[{Age:{$lt:"18"}},{Age:{$gte:"60"}}]})
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})

app.post('/deletemanyand', async(req, res) => {
    await db.collection("harika").deleteMany({$and:[{Age:{$lt:"18"}},{Age:{$gte:"60"}}]})
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})


app.get('/', (req, res) => {
    res.json(" HAI HOW ARE YOU???")
})



app.post('/login', async(req, res) => {
    try{
   const result= await db.collection("harika").findOne(req.body)
    if(result){
        res.json("Login Sucess");
    }
    else{
        res.json("login failed")
    }
}
    catch(e){
        console.log("error occured")
    }
})


connectToDB(() => {
    app.listen(9000, () => {
        console.log("server running at 9000");
    })
})










