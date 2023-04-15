import axios from "axios";
import { IClientBlog } from "../interfaces/mongo";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/firebase/firebase";
export class BlogServices implements IClientBlog {
    relativePath: string;
    baseUrl: string;
    constructor() {
        this.relativePath = "api/blog";
        this.baseUrl = process.env.APP_ENV === "dev" ? process.env.DEV_URL! : process.env.PROD_URL!;
        this.createBlog = this.createBlog.bind(this);
    }
    async createBlog(data: any) {
        
        if(data.imageData){
            console.log(data.imageData)
            const {imageData} = data
            delete data["imageData"]
            const storageRef = ref(storage, imageData.fileName);
            await uploadBytes(storageRef, imageData.image)
            const imgUrl = await getDownloadURL(ref(storage, imageData.fileName));
            data.imageUrl = imgUrl
        }
        const response = await axios.post(`/api/blog`, data);
        return response;
    }
    async getBlogList(params: any) {
        let url = params?.query ? `${this.baseUrl}${this.relativePath}?${params.query}` : this.baseUrl + this.relativePath;
        const response = await axios.get(url)
        console.log(response)
        return response
    }
}

export const useBlogservice = () => new BlogServices();
