const express=require('express');
const dotenv=require('dotenv')
const cors=require('cors');
const connectDB=require('./config/db')
const expenseRouter=require('./routes/expenseRoutes');
dotenv.config();
connectDB();
// const PORT=5001;
const app=express();
app.use(cors());
app.use(express.json())
app.use('/api/expenses',expenseRouter)
const PORT=process.env.PORT|| 5001
app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`)
})