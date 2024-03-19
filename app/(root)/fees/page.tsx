"use client"
import { useEffect } from 'react';
import { Button } from "@/components/ui/button"
import Link from 'next/link';

import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    RedirectToSignIn,
  } from "@clerk/nextjs";
  
const Fees = () => {
    const url = 'https://payments.campx.in/giet/giet/public/login'; // Replace this with your desired URL

    useEffect(() => {
        window.open(url, '_blank', 'noopener,noreferrer');
        // Close the new tab after 3 seconds (optional)
        
    }, []);

    return (
        <>
         <SignedIn> 
        <div>
            <div className="head-text text-left">Academic Fees</div>
            <div className='flex flex-col justify-center items-center max-h-full gap-2'>
            <p className='text-light-2 mt-10'>Please Wait 5 Seconds. if page not opened</p>
            {/* <Button variant="link" >Link</Button></p> */}
            <Button asChild className="justify-items-center bg-primary-500" >
            <Link href="https://payments.campx.in/giet/giet/public/login" target="_blank">Click Here!</Link>
            </Button>
            {/* You can optionally include other content here */}
            </div>
        </div>
        </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
        </>
    );
};

export default Fees;
