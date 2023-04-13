import mongoose from "mongoose";
import { ICreateItem, IGetItem, IMongoDal } from "../interfaces/mongo" 
import User from "../db/mongo/schema"
export class MongoDal implements IMongoDal {
    mongoUrl:string ;

    constructor() {
        this.mongoUrl = process.env.DATABASE_URL!;
        this.createItem = this.createItem.bind(this);
    }

    async createItem({ data, resource, uniqueCheck }: ICreateItem) {
        await mongoose.connect(this.mongoUrl)
        const model = mongoose.model(resource)
        if (Object.entries(uniqueCheck).length !== 0) {
            const duplicate = await model.findOne(uniqueCheck)
            if (duplicate) {
                const errorObj = new Error()
                errorObj.message = "Duplicate entry"
                errorObj.name = "401 error"
                throw errorObj
            }
        }
        const result = await model.create(data)
        return result
    }
    async getItem({ resource, queryObj }: IGetItem) {
        try {
            //@ts-ignore
            const result = await this.prisma[resource].findUnique({
                where: {
                    ...queryObj
                }
            })
            return result
        } catch (error) {

        }
    }
}
