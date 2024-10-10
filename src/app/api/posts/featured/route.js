import {NextResponse} from "next/server";
import prisma from "@/lib/prisma";


//FEATURED SINGLE POST
export const GET = async () => {
    

    const minMaxAge = await prisma.post.aggregate({
        _max: {
            createdAt: true,
        }
      })
  
    try {

        const post = await prisma.post.findMany({
            where: {
                createdAt: {
                    equals: minMaxAge._max.createdAt,
                  },
            }
        });
    
        return new NextResponse(JSON.stringify(post[0], {status_: 200}))
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: "Что то пошло не так"}, {status: 500}))
    }
}