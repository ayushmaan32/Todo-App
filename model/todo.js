// require the mongoose library
const mongoose = require('mongoose');
// creatd schema 
const todoSchema = new mongoose.Schema({
      description: {
        type : String,
        required : true
      },
      category:{
        type: String,
        enum:['Personal','Work','School','Cleaning','Other'],
        default: Personal 
      },
     Date:{
        type:Date,
        required:true
     }

},{
    timestamps:true
});

const Todo = mongoose.models('Todo',todoSchema);
// exporting schema
module.exports = Todo;