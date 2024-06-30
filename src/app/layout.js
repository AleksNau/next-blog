import './globals.css'
import {Golos_Text} from 'next/font/google'
import NavBar from '../components/NavBar/NavBar'
import Footer from "../components/Footer/Footer";
import {ThemeContextProvider} from "@/context/ThemeContext";

/*import ThemeProvider from "@/providers/ThemeProvider"; использую провайдер2 за место так как не работает*/

import dynamic from 'next/dynamic'
import AuthProvider from "@/providers/AuthProvider";


const ThemeContextProvider2 = dynamic(() => import("@/providers/ThemeProvider"), {
    ssr: false,
})

const inter = Golos_Text({subsets: ['latin']})

export const metadata = {
    title: 'Настолки FUN',
    description: 'Блог о настольных играх',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <AuthProvider>
            <ThemeContextProvider>
                <ThemeContextProvider2>
                    <div className={'container'}>
                        <div className="wrapper">
                            <NavBar/>
                            {children}
                            <Footer/>
                        </div>
                    </div>
                </ThemeContextProvider2>
            </ThemeContextProvider>
        </AuthProvider>
        </body>
        </html>
    )
}
