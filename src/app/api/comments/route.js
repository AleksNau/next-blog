import {NextResponse} from "next/server";
import prisma from "@/lib/prisma";
import {auth} from "@/auth";


//Comments
export const GET = async (request) => {
    const {searchParams} = new URL(request.url)

    const postSlug = searchParams.get("postSlug")

    console.log('postSlug ' + postSlug)
    try {
        const comments = await prisma.comment.findMany({
            where: {
                ...(postSlug && {postSlug}),
            },
            include: {
                user: true,
            }
        });

        return new NextResponse(JSON.stringify(comments, {status_: 200}))
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: "Коментарии не найдены"}, {status: 500}))
    }
}



//create a comment

export const POST = async (request) => {
    const {searchParams} = new URL(request.url)

    const session = await auth()
    console.log("session"+session)
    if (!session) {
        return new NextResponse(JSON.stringify({message: "Для коментария нужно авторизоваться"}, {status: 401}))
    }

    try {
        const body = await request.json()
        console.log("body"+body)
        const comment = await prisma.comment.create({data:{userEmail:session.user.email,...body}});

        return new NextResponse(JSON.stringify(comment, {status_: 200}))
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: "Коментарии не найдены"}, {status: 500}))
    }
}