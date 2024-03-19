import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"
import { dark } from "@clerk/themes";

import '../globals.css';

export const metadata = {
    title: 'GEC HUB',
    descriptionL: 'A Complete Exam Cell Application of GEC'
}

const inter = Inter({ subsets:["latin"]})

export default function RootLayout({children }: { children: React.ReactNode}) {
    return (
        <ClerkProvider

        >
            <html lang="en">
                <body className={'${inter.className} bg-dark-1'}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}