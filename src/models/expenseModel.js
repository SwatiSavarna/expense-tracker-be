const mongoose=require('mongoose');
const expenseSchema= new mongoose.Schema({
    description:{
        type:String,
        required:[true,'Please Add a description'],
    },
    amount:{
        type:Number,
        required:[true,"Please add an amount"],
    },
    date:{
        type:Date,
        required:[true,"please add a date"],
        default:Date.now,
    },
    category:{
        type:String,
        required:[true,"please add a string"]
    }

},
{
    timestamps:true,
}
)
const Expense=mongoose.model('Expense',expenseSchema)
module.exports=Expense