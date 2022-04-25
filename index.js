const express = require('express');
const cors =require('cors')
// const { MongoClient, ServerApiVersion } = require('mongodb');
const app=express();
const port= process.env.PORT||5000;

app.use(cors())
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('my smarty node work in first!!!')
});
const users=[
    {id:1,Name:'Tarin',email:'tarin@gmail.com',Phone:'09999999'},
    {id:2,Name:'Tarbn',email:'jarin@gmail.com',Phone:'09999999'},
    {id:3,Name:'Tarkn',email:'farin@gmail.com',Phone:'09999999'},
    {id:4,Name:'karin',email:'karin@gmail.com',Phone:'09999999'},
    {id:5,Name:'marin',email:'marin@gmail.com',Phone:'09999999'},
    {id:6,Name:'sarin',email:'sarin@gmail.com',Phone:'09999999'},
]
// filter serch paramiter quiry
app.get('/users',(req, res)=>{
    if(req.query.name){
        const search=req.query.name.toLowerCase();
        const matched=users.filter(user=>user.Name
            .toLowerCase().includes(search))
        res.send(matched);


    }

   else{
    res.send(users);
   }


    

})
app.get('/users/:id',(req,res)=>{
    console.log(req.params)
    const id =req.params.id;
    const user =users[id];
    res.send(users);
});

app.post('/user',(req,res)=>{
    console.log('request', req.body);
    const user=req.body;
    user.id=users.length+1
    users.push(user)
res.send(user);
})
app.get ('/fruits',(req,res)=>{
    res.send(['mango','orange','apple']);
});
app.get('/fruits/mango/fajli',(req,res)=>{
    res.send('sour sour fajli favour');
});




app.listen(port,()=>{
    console.log('lisning my port',port)
})



 // mongodb user name:dbuser1

// password :NU2W7D05dI3LrUWx
// .......................


// const uri = "mongodb+srv://dbuser1:NU2W7D05dI3LrUWx@cluster0.6wtoh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   console.log('db connected')
//   // perform actions on the collection object
//   client.close();
// });
