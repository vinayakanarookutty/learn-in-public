import { IBlog, ISchemaExport } from "@/lib/interfaces/mongo";
import mongoose from "mongoose";

const blogSchema = new mongoose.Schema<IBlog>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Types.ObjectId,
  },
  username: {
    type: String,
  },
  imageUrl: {
    type: String,
    required: false,
  },
});

export const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export class MongoSchema implements ISchemaExport {
  Blog: any;
  constructor() {
    this.Blog = Blog;
    this.initializeSchemas = this.initializeSchemas.bind(this);
  }

  initializeSchemas(){

    return {Blog:this.Blog} 

  }
}
