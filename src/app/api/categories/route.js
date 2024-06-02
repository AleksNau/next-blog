import {NextResponse} from "next/server";
import prisma from "@/lib/prisma";

export const GET = async () => {
    try {
        const categories = await prisma.category.findMany();
        return new NextResponse(JSON.stringify(categories, {status_: 200}))
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: "Что то пошло не так"}, {status: 500}))
    }
}