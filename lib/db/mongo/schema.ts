import { IBlog } from "@/lib/interfaces/mongo";
import mongoose from "mongoose";

const blogSchema = new mongoose.Schema<IBlog>({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Types.ObjectId,
        
    },
    username:{
        type:String,
    }
})

const Blog = mongoose.models.Blog || mongoose.model("Blog",blogSchema)

export default Blog
