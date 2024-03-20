import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";
import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import Bottombar from "@/components/shared/Bottombar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'GEC HUB',
  descriptionL: 'A Complete Exam Cell Application of GEC'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
      <SignedIn> 
        <Topbar />

        <main className="flex flex-row">
          <LeftSidebar />

             <section className="main-container" >
                <div className="w-full max-w-4xl">
                  {children}
                </div>

             </section>

          {/* <RightSidebar /> */}
        </main>
        
        <Bottombar />
        </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
        </body>
    </html>

    </ClerkProvider>
  );
}
