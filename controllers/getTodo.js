//import the model
const Todo = require("../models/Todo");

//geTodo handler
exports.getTodo = async(req, res)=>{
    try {

        //fetch all todo items from database
        const todos = await Todo.find({});
        
        //response
        res.status(200)
        .json(
            {
                success:true,
                data:todos,
                message:"All todo items fetched successfully"
            }
        )
        
    } catch (error) {
        console.error(error.message);
        console.log(error.message);
        res.status(500)
        .json(
            {
                success:false,
                error:error.message,
                message:"server error"
            }
        )
        
        
        
    }
}

//get todo single item
//get todo by id
exports.getTodoById = async(req, res)=>{
    try {

        //extract todo items basis on id
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});

        //data for given id not found
        if(!todo){
            return res.status(404).json(

                {
                    success:false,
                    message:"no data found with given id"
                }
            )
        }
        //data found with given id 
        res.status(200).json(
            {
                success:true,
                data:todo,
                message:`Todo id${id} successfully fetched`
            }
        )
        
        
        
    } catch (error) {
        console.error(error.message);
        console.log(error.message);
        res.status(500)
        .json(
            {
                success:false,
                error:error.message,
                message:"server error"
            }
        )
    }
}