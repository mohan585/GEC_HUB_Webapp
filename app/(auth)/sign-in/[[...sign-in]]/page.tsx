import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex item-start justify-center min-h-screen px-10 py-20">
            <SignIn />
        </div>
    )
}