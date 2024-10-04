import './globals.css'
import 'react-quill/dist/quill.snow.css'
import {Golos_Text} from 'next/font/google'
import NavBar from '../components/NavBar/NavBar'
import Footer from "../components/Footer/Footer";
import {ThemeContextProvider} from "@/context/ThemeContext";
import {MyProvider} from "@/context/MyContext";
import {getCategoryData} from "@/app/utils/data";
import {
    ClerkProvider,
  } from '@clerk/nextjs'
 


/*import ThemeProvider from "@/providers/ThemeProvider"; использую провайдер2 за место так как не работает*/

import dynamic from 'next/dynamic'


const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
const ThemeContextProvider2 = dynamic(() => import("@/providers/ThemeProvider"), {
    ssr: false,
})

const inter = Golos_Text({subsets: ['latin']})

export const metadata = {
    title: 'Настолки FUN',
    description: 'Блог о настольных играх',
}

export default async function RootLayout({children}) {
let cat = await getCategoryData();
    return (
        <html lang="en">
        <body className={inter.className}>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
            <ThemeContextProvider>
                <ThemeContextProvider2>
                    <MyProvider>
                    <div className={'container'} category={cat}>
                        <div className="wrapper">
                            <NavBar/>
                            {children}
                            <Footer/>
                        </div>
                    </div>
                    </MyProvider>
                </ThemeContextProvider2>
            </ThemeContextProvider>
            </ClerkProvider>

        
        </body>
        </html>
    )
}
