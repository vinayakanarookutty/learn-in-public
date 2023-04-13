// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoDal } from "@/lib/utils/mongoDal";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method === "GET")
        return res.status(404).send({ message: "Invalid method" });
    console.log(req.body);
    const mongoDal = new MongoDal();
    try {

        const result = await mongoDal.createItem({ resource: "User", data: req.body, uniqueCheck: { email: req.body.email } });
        return res.status(200).send(result);
    } catch (error: any) {
        return res.status(400).json({ message: error.message })
    }
}
