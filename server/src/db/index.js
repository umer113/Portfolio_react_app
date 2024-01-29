import mongoose from 'mongoose';

const connectDB = async()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_URL}/${process.env.DB_NAME}`)
        console.log("MongoDB is connected!")
    }catch(error){
        console.log(error)
    }
}

export default connectDB