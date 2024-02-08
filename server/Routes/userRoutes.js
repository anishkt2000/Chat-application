
const {register,login,setAvatar,getAllUsers, logOut}  =require("../controllers/userControllers");


const router =require("express").Router();


router.post("/register",register);
router.post("/login",login);
router.post("/setAvatar/:userId",setAvatar);
router.get("/allUsers/:id",getAllUsers);
router.get("/logout/:id",logOut);
// router.get("/login2",login2);

module.exports = router;

