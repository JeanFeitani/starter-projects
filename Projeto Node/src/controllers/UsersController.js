class UsersController {
    create(request, response){
        const {name, email, isAdmin} = request.body
        response.status(201).json({name})
    }
}

module.exports = UsersController