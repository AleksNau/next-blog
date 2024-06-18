'use server'
import {signOut, auth} from "@/auth";


export async function SignOut() {

    return await signOut({callbackUrl: "/api/auth/logout"});
}

