import axios from "axios";
import { IClientBlog } from "../interfaces/mongo";

export class BlogServices implements IClientBlog {
    relativePath: string;
    baseUrl: string;
    constructor() {
        this.relativePath = "api/blog";
        this.baseUrl = process.env.APP_ENV === "dev" ? process.env.DEV_URL! : process.env.PROD_URL!;
        this.createBlog = this.createBlog.bind(this);
    }
    async createBlog(data: any) {
        const response = await axios.post(`${this.relativePath}`, data);
        return response;
    }
    async getBlogList(params: any) {
        let url = params?.query ? `${this.baseUrl}${this.relativePath}?${params.query}` : this.baseUrl + this.relativePath;
        const response = await axios.get(url)
        console.log(response)
        return response
    }
}
