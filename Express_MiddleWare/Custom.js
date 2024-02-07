function customise(req,res,next)
{
    console.log("Customised Middleware");
    next()
}

module.exports=customise;