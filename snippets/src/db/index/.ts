import { PrismaClient } from "@prisma/client/extension";
import { title } from "process";

export const db = new PrismaClient

db.snippet.create({
    data:{
        title: "Title!",
        code: "const abc = () => {}"
    }
})