import Router from 'express';
import UserController from "./UserController.js";

                        //создается роутер для указания всех путей и обрабатывающих их функций

const router = new Router();                                    //создается сам роутер, название любое
                                                                //далее все круд операции с указанием пути и функций,
router.post('/users', UserController.create)               //созданных в UserController, какая функция по какому пути
router.get('/users', UserController.getAll)
router.get('/users/:id', UserController.getOne)
router.put('/users', UserController.updateUser)
router.delete('/users/:id', UserController.deleteUser)

export default router;