import {NextResponse} from "next/server";
import prisma from "@/lib/prisma";

export const GET = async (req) => {
    const {searchParams} = new URL(req.url);

    const page = searchParams.get('page')
    const POSTS_PER_PAGE = 3;

    try {
        const posts = await prisma.post.findMany({ take: POSTS_PER_PAGE, skip: POSTS_PER_PAGE*(page - 1)});

        return new NextResponse(JSON.stringify(posts, {status: 0}))
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: "Что то пошло не так"}, {status: 500}))
    }
}