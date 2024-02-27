const { Router } = require("express")
const usersRouter = require("./users.routes")
const notesRouter = require("./notes.routes")

const routes = Router()
routes.use("/notes", notesRouter)
routes.use("/users", usersRouter)


module.exports = routes