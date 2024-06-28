'use server'

import {signOut,signIn} from "@/auth";



export async function SignOUT() {
return await signOut({ callbackUrl: "/api/auth/logout"});
}

export async function SignIN() {
    return await signIn("google");
}