

import { currentUser } from "@clerk/nextjs";

import { fetchUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";

import ListResult from "@/components/cards/ListResult";

async function page({params}: {params:{name:string}}) {


    const user = await currentUser();
    if(!user) return null;

    const userInfo = await fetchUser(user.id);
    if (!userInfo?.onboarded) redirect("/onboarding");
    
    // const segments = params.name
    
    // let combinedString = '';
    
    // for (let i = 0; i < segments.length; i++) {
    //   if (i !== 0) {
    //     combinedString += '/';
    //   }
    //   combinedString += segments[i];
    // }
    // console.log(combinedString)
    // console.log(user.imageUrl)

    
    return (
      <>
       <SignedIn> 
      <main>      

              <ListResult name={params.name} pin={userInfo.pinnumber} firstname={user.firstName} lastname={user.lastName}
              image={user.imageUrl}
              />
      </main>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      </>
    );
}

export default page;