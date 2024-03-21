import Image from "next/image"

export default function Loading() {
    return(
        <div className="min-h-screen flex items-center justify-center">
        <div className='no-result grid justify-items-center'>
            <Image src="/assets/loader.svg" alt='loader image' width={44} height={44} />
            <p className='mt-4'>Loading...</p>
        </div>
        </div>
    )
}