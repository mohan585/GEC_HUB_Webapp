import { UserProfile } from "@clerk/nextjs";

function UserProfilePage  (){
  return (
    <>
    <UserProfile path="/profile" routing="path" />
    </>

  )
}

 
export default UserProfilePage;