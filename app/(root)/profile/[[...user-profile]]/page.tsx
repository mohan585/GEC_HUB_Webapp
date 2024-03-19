import { UserProfile } from "@clerk/nextjs";
 
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";

function UserProfilePage  (){
  return (
    <>
     <SignedIn> 
    <UserProfile path="/profile" routing="path" />
    </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>

  )
}

 
export default UserProfilePage;