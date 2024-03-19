import { SignOutButton, SignedIn, UserButton,SignedOut,UserProfile  } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

function Topbar() {
    return (
        <nav className="topbar">
            <Link href="/" className="flex items-center gap-4">
                <Image src="/assets/logo.png" alt="logo" width={58} height={28} />
                <p className="text-heading3-bold text-light-1 max-xs:hidden">GEC HUB</p>
            </Link>

            <div className="flex items-center gap-2">
                <div className="block md:hidden">
                    <SignedIn>
                        <SignOutButton>
                            <div className="flex cursor-pointer">
                                <Image src="/assets/logout.svg"
                                alt="logout"
                                width={24}
                                height={24}
                                />
                            </div>
                        </SignOutButton>
                    </SignedIn>
                </div>
                
                <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>


            </div>
        </nav>
    )
}

export default Topbar;