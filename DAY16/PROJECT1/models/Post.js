const monngoose = require=("mongoose");

const postSchema = new mongoose.schema({},{
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
    
},{
    timestamps:true
});
