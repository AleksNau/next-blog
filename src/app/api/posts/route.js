import {NextResponse} from "next/server";
import prisma from "@/lib/prisma";
import {auth} from "@/auth";

export const GET = async (req) => {
    const {searchParams} = new URL(req.url);

    const page = searchParams.get('page')
    const POSTS_PER_PAGE = 3;

    const query = {
        take: POSTS_PER_PAGE,
        skip: POSTS_PER_PAGE * (page - 1)
    }

    try {
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count()
        ]);

        return new NextResponse(JSON.stringify({posts, count}, {status: 200}))
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: "Что то пошло не так"}, {status: 500}))
    }
}


//create a post
export const POST = async (request) => {

    const session = await auth()

    if (!session) {
        return new NextResponse(JSON.stringify({message: "Нет сессии"}, {status: 401}))
    }

    try {
        const body = await request.json()
        console.log("api req: "+body)
        const post = await prisma.post.create({data: {userEmail: session.user.email, ...body}});

        return new NextResponse(JSON.stringify(post, {status_: 200}))
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: "Постов нет"}, {status: 500}))
    }
}