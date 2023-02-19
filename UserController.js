import User from "./Users.js";
import Users from "./Users.js";
import UsersService from "./UsersService.js";

//создается объект с методами для всех круд операции

class UserController {
    async create(req, res) {
        try {
            const user = await UsersService.create(req.body)              //отправляем в сервис тело запроса, чтобы там,
            res.status(200).json(user)                                    //отправить в БД, обязательно await
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const users = await UsersService.getAll();           //с помощью сервиса юзеров просим достать всех юзеров
            return res.status(200).json(users)                               //возвращаем юзеров, которых нашли в респонс
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params                          //достаем id из параметров запроса -> users/:id <-
            const user = await UsersService.getOne(id)       //работа с БД через сервис, поэтому await
            return res.status(200).json(user)                            //возвращаем юзера, которого нашли в респонс
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async updateUser(req, res) {
        try {
            const updatedUser = await UsersService.updateUser(req.body)  //находим по id -> добавляем новый
            return res.status(200).json(updatedUser)                                                    //объект юзера и ставим new, чтобы
        } catch (e) {                                                                       //заменить полностью
            res.status(500).json(e)
        }
    }

    async deleteUser(req, res) {
        try {
            const deletedUser = await UsersService.deleteUser(req.params.id)
            return res.status(200).json(deletedUser)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new UserController();