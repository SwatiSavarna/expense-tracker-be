const mongoose=require('mongoose');
const connectDB=async()=>{
    try{
const connn= await mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
console.log(`MongoDB connected${connn.connection.host}`)
    }catch(error){
console.log(`Error ${error.message}`)
process.exit(1);
    }
}
module.exports=connectDB