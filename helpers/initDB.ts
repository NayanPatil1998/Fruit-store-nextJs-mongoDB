import mongoose from 'mongoose'

function initDB(){

    if(mongoose.connections[0].readyState){
        console.log("already connected")
        return
    }
    mongoose.connect("mongodb://localhost:27017/myshop", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    mongoose.connection.on("connected", ()=> {
        console.log("connected to mongoDB")
    })
    mongoose.connection.on("error", (err)=> {
        console.log("err", err);
    })
}

export default initDB;