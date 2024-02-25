const AppError = require("../utils/AppError")

class UsersController {
    create(request, response){
        const {name, email, isAdmin} = request.body

        if(!name){
            throw new AppError("nome é obrigatório")
        }

        response.status(201).json({name})
    }
}

module.exports = UsersController