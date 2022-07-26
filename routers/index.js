const userRouter= require("./user.router")
const transRouter= require("./transport.router")
const statisticalRouter= require("./statistical.router")
const errorHandle= require("../middlewares/ErrorHandle")
module.exports= (app)=>{
  app.use("/api/user", userRouter)
  app.use("/api/transport", transRouter)
  app.use("/api/statistical", statisticalRouter)
  app.use(errorHandle)
}