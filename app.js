const express = require('express')
const router = express.Router()
const routerApi = require("./src/routers/api")

router.use("/api/v1",routerApi)

// route vul hoile akhan theke error dibe
router.use('*', (req, res)=>{
    res.send("This api is not found please try again")
})


module.exports = router