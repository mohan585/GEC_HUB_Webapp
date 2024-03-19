import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";

import Searchbar from "@/components/shared/Searchbar";
import Pagination from "@/components/shared/Pagination";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";

import { fetchUser,fetchSearchResults } from "@/lib/actions/user.actions";
import ResultCard from "@/components/cards/ResultCard";
import { CodeSquare } from "lucide-react";
import SearchResults from "@/components/search/SearchOp";


async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {

  const user = await currentUser();
  if (!user) return null;
  
  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");
  
  // console.log(searchParams)
  // const query = searchParams.q;
  // const result = await fetchSearchResults({
  //   query,
  // });
  // console.log(result)

  return (
    <>
    <SignedIn> 
    <section>
      
      <h1 className='head-text mb-10'>Search</h1>

      <Searchbar routeType='search' />

      <SearchResults query={searchParams.q} />

    </section>
    </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      </>
  );
}

export default Page;