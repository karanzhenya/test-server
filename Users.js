import mongoose from "mongoose";

                        //создается тип сущностей, которые будут хранится в базе данных

const User = new mongoose.Schema({               //схема данных
    name: {type: String, required: true},                //типизация, required - обязательно или нет это поле
    age: {type: Number, required: true},
    avatar: {type: String}
})

export default mongoose.model('User', User)         //эксспорт модели, название любое