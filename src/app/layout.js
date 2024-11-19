import "./globals.css";
import "react-quill/dist/quill.snow.css";
import { Suspense } from 'react';
import Script from 'next/script';
import { Golos_Text } from "next/font/google";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import YandexMetrika from "../components/YandexMetrika/YandexMetrika";
import { ThemeContextProvider } from "@/context/ThemeContext";
import { MyProvider } from "@/context/MyContext";
import { getCategoryData } from "@/app/utils/data";
import { ClerkProvider } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";

/*import ThemeProvider from "@/providers/ThemeProvider"; использую провайдер2 за место так как не работает*/

import dynamic from "next/dynamic";

const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
const ThemeContextProvider2 = dynamic(
  () => import("@/providers/ThemeProvider"),
  {
    ssr: false,
  }
);

const inter = Golos_Text({ subsets: ["latin"] });

export const metadata = {
  title: "Настолки FUN",
  description: "Блог о настольных играх",
  verification: {
    google: "SKNqL5wia-WO-tnVxfjmfsXf77iE1uReS0gxZhO9CwY",
    yandex: "ccb06f132f544386",
  },
  keywords: ["Настольные игры", "Развлечения", "Блог"],
  creator: "Alex Now",
  metadataBase: new URL("https://tablefun.ru"),
  alternates: {
    canonical: "/",
  },
};

export default async function RootLayout({ children }) {
  const { userId } = auth();
  const user = await currentUser();
  let cat = await getCategoryData();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <ThemeContextProvider>
            <ThemeContextProvider2>
              <MyProvider>
                <div className={"container"} category={cat}>
                  <div className="wrapper">
                    <NavBar />
                    {children}
                    <Footer />
                  </div>
                </div>
              </MyProvider>
            </ThemeContextProvider2>
          </ThemeContextProvider>
        </ClerkProvider>
        <Script id='yandex-metrika' type="text/javascript" strategy="afterInteractive">
  { `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(98977517, "init", {
   defer: true,
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   })`}
</Script>
<noscript><div><img src="https://mc.yandex.ru/watch/98977517"alt="" /></div></noscript>
<Suspense fallback={<></>}>
            <YandexMetrika />
          </Suspense>
      </body>
    </html>
  );
}
