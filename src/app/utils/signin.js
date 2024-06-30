'use server'

import {signIn} from "@/auth";

export async function loginOath() {
    await signIn("google",{ redirectTo: "/" })
}