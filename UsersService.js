import User from "./Users.js";
import Users from "./Users.js";

class UsersService {
    async create(user) {
        const createdUser = await User.create(user)
        return createdUser;
    }

    async getAll() {
        const users = await Users.find();           //используя модель из Users.js, обращаемся к БД и получаем всех юзеров
        return users                                //возвращаем юзеров, которых нашли
    }

    async getOne(id) {
        if (!id) {
            throw new Error('ID не указан!')
        }
        const user = await Users.findById(id)       //работа с БД, поэтому await
        return user                                 //возвращаем юзера, которого нашли, можно не создавать переменную user
    }

    async updateUser(user) {                                                           //получаем новый объект юзера
        if (!user) {                                                                   //из бади запроса
            throw new Error(' ID не указан')                                           //проверяем наличие бади в запросе
        }
        const updatedUser = await User.findByIdAndUpdate(user._id, user, {new: true})   //находим по id -> добавляем новый
        return updatedUser                                                              //объект юзера и ставим new, чтобы
    }

    async deleteUser(id) {
        if (!id) {
            throw new Error('ID не указан')
        }
        const deletedUser = await User.findByIdAndDelete(id)
        return deletedUser;
    }
}

export default new UsersService();