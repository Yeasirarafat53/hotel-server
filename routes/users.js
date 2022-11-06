import express from 'express';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';
import {  updateUser, deleteUser, getUser, getUsers } from '../controllers/user.js';


 const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("hello user, you are loggedin")
// })

// router.get('/checkuser/:id',verifyUser, (req, res, next) => {
//   res.send('hello user, you are loggedin and you can delete your account');
// });

// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//   res.send('hello admin, you are loggedin and you can delete all account');
// });

//UPDATE
router.put('/:id',verifyUser, updateUser);

//delete
router.delete('/:id', verifyUser, deleteUser);

//GET
router.get('/:id', verifyUser, getUser);

//GET ALL
router.get('/', verifyAdmin, getUsers);


export default router;
