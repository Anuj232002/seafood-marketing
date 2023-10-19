const express=require('express')
const router = express.Router()
router.post('/seafoodData',(req,res)=>
{
    try {
        console.log(global.restrarant)
        res.send(global.restrarant)
    } catch (error) {
        console.error(error.message)
        res.send("Server Error")
    }
})
module.exports=router