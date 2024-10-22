const mongoose=require('mongoose');
const employeSchema=mongoose.Schema({
    employeId:{
        type:String,
        required:true
    },
    employeName:{
        type:String,
        required:true
    },
    employeDesignation:{
        type:String,
        required:true
    },
    employeSalary:{
        type:String,
        required:true},
    employeDepartment:{
        type:String,
        required:true},
    employeLocation:{
        type:String,
        required:true}
})
const employeeData=mongoose.model('course',employeSchema);
module.exports=employeeData;