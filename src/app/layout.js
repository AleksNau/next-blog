import './globals.css'
import {Inter} from 'next/font/google'
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import {ThemeContextProvider} from "@/context/ThemeContext";

/*import ThemeProvider from "@/providers/ThemeProvider"; использую провайдер2 за место так как не работает*/

import dynamic from 'next/dynamic'

const ThemeContextProvider2 = dynamic(() => import("@/providers/ThemeProvider"), {
    ssr: false,
})

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Blog App',
    description: 'The best pages app!',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
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
        </body>
        </html>
    )
}
