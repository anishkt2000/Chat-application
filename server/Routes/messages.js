const {addMessage, getMessage} =require("../controllers/messageController");

const router =require("express").Router();

router.post("/addmsg",addMessage);
router.get("/getmsg",getMessage);


module.exports =router;