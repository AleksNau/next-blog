import {NextResponse} from "next/server";
import prisma from "@/lib/prisma";


//SINGLE POST
export const GET = async (request, {params}) => {
    const slug = params.slug

    try {
        const post = await prisma.post.findUnique({
            where: {
                slug: slug,
            },
            include: {
                user: true,
            }
        });

        return new NextResponse(JSON.stringify(post, {status_: 200}))
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: "Что то пошло не так"}, {status: 500}))
    }
}