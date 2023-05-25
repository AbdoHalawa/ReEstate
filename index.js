const express =require("express");
const app=express();
const server=require('http').createServer(app)
const io=require('socket.io')(server,{cors:{origin:"*"}});
app.set("view engine","ejs");
app.use(express.static("public"));

app.get('/',(req,res)=>
{
    res.render('support');
})
app.post('/',(req,res)=>
{
    console.log("entered");
})

server.listen(3000);
io.on('connection',(socket)=>
{
    console.log(socket.id);
    socket.on("message",(data)=>//2
    {
        socket.broadcast.emit("message",data);//3
    })

    
})
