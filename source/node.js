import express from 'express';
import { connectToDB,db } from "./db.js";

const app = express()

app.use(express.json())


app.post('/data',(req,res)=>
{
 console.log({Name:req.body.Name,Team:req.body.Team,Regdno:req.body.REGDNO,Branch:req.body.Branch});
res.json({Name:req.body.Name,Team:req.body.Team,Regdno:req.body.REGDNO,Branch:req.body.Branch});
})




app.put('/ast',(req,res)=>
    {
     console.log({Name:req.body.Name,Team:req.body.Team,Regdno:req.body.REGDNO,Branch:req.body.Branch});
    res.json({Name:req.body.Name,Team:req.body.Team,Regdno:req.body.REGDNO,Branch:req.body.Branch});
    })


    app.delete('/ast',(req,res)=>
        {
         console.log({Name:req.body.Name,Team:req.body.Team,Regdno:req.body.REGDNO,Branch:req.body.Branch});
        res.json({Name:req.body.Name,Team:req.body.Team,Regdno:req.body.REGDNO,Branch:req.body.Branch});
        })
app.get('/', (req, res) => {
    res.json(" HAI HOW ARE YOU???")
})


connectToDB(() => {
    app.listen(8000, () => {
        console.log("server running at 8000");
    })
})