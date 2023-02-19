import express from 'express';
import mongoose from "mongoose";
import cors from 'cors'

import router from './router.js';
const app = express();                  //инициализируем експресс в приложение
const PORT = 5000;                      //создаем порт для локалхоста, может быть любой
app.use(cors({                       //снимаем cors политику. Обязательно вверху кода!
    origin: '*'
}));
app.use(express.json());                //чтобы експресс читал json формат
app.use(router)                         //инициализуем созданный роутер, их может быть несколько для разных сущностей
mongoose.set("strictQuery", false);     //убрали ворнинг. *Не полное* совпадение созданной схеме
const DB_URL = `mongodb+srv://karanzhenya:097247793@cluster0.5q2nv3i.mongodb.net/?retryWrites=true&w=majority`;


async function startApp() {                   //старт приложения с подключенной базой данных
    try {
        await mongoose.connect(DB_URL)        //конектим монго к проекту, все операции с БД асинхронные, поэтому await
        app.listen(PORT, () => {      //запуск приложение, слушая наш порт, в колбэке возвращает уведомление
            console.log('server start work!')
        })
    } catch (e) {
        console.log(e)
    }
}

startApp();        //запуск функции, которая стартует весь проект