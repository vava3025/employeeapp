const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const app=new express()
app.use(morgan('dev'));
app.use(cors())
const employeRoutes=require('./routes/basicroutes');
const user_route=require('./routes/user')
app.use('/user',user_route)
app.use('/employe',employeRoutes);
require('./db/connection');
require('dotenv').config();
const PORT=process.env.PORT;








app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})