import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from 'dotenv';


dotenv.config({
    path:"./server/.env"
})

const PORT = process.env.PORT || 7200


connectDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is connected ${PORT}`)
    })
})
.catch((error)=>{
    console.log(error)
})

