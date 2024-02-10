const Messages =require("../Models/messageModel");

module.exports.getMessage =async (req,res,next)=>{

    try{
        const {from,to} =req.body;
    
        const message =await Messages.find({
            users: {
                $ne :[from.toString(),to.toString()]
            },

        }).sort({updatedAt: 1});
     
        
        const projectedMessages = message.map((msg) => {
            return {
            //   fromSelf: msg.sender.toString() === from,
              fromSelf: from,
              message: msg.message.text,
            };
          });
          res.json(projectedMessages);
    }
    catch(ex){
        next(ex);
    }
}
module.exports.addMessage =async (req,res,next)=>{


    try{
        const {from,to,message } =req.body;
        const  data =await Messages.create({
            message: {text :message,
            users : [from,to],
            sender :from,
            }
        });
        if(data) {
            return res.json({msg :"Message added successfully"});

        }
        else{
            return res.json({
                msg : "Failed to add message to the database"
            });
        }
    }
    catch(ex){
        next(ex);
    }
}