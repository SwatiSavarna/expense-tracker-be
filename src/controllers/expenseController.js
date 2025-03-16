const Expense=require('../models/expenseModel')

const getExpenses=async(req,res)=>{
try{
const expenses=await Expense.find();
res.status(200).json(expenses)
}catch(error){
res.status(500).json({message:error.message})
}
}

const addExpense=async(req,res)=>{
    const{description,amount,date,category}=req.body;
    try{
const newExpense=new Expense({
    description,
    amount,
    date,
    category
})
const savedExpense= await newExpense.save()
res.status(201).json(savedExpense)
    }catch(error){
res.status(500).json({message:error.message})
    }
}

const deleteExpense=async(req,res)=>{
    try{
const expense=await Expense.findByIdAndDelete(req.params.id);
if(!expense){
    return res.status(400).json("Expense not found");
}

res.status(200).json({message:"expense removed"});

    }catch(error){
        res.status(500).json({message:error.message})
    }
}
module.exports={
    getExpenses,
    deleteExpense,
    addExpense,
}