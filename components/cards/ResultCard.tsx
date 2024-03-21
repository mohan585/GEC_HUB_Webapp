import Image from "next/image";
import Link from "next/link";

import { formatDateString } from "@/lib/utils";

interface Props {
  name: string;
  last_reval: string;
  createdAt: string

}

function ThreadCard({
  name,
  last_reval,
  createdAt,

}: Props) {
  return (
    <Link href={`/results/${name}`}>
    <article className="flex w-full flex-col rounded-xl bg-dark-2 p-7 cursor-pointer">
        <div className="flex items-start justify-between">
            <div className="flex w-full flex-1 flex-row gap-4">
                <div className="flex flex-col items-center">
                    <div className="relative h-14 w-14">
                        <Image src="/assets/jntuk.png"
                        alt="logo pic"
                        fill
                        className="cursor-pointer rounded-full "
                        priority
                        // sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 100vw"
                        />
                    </div>

                    <div className="thread-card_bar" />
                </div>

                    <div className="flex w-full flex-col">
                        <div className="w-fit">
                            <h4 className="cursor-pointer text-base-semibold text-light-1">
                                {name}
                            </h4>
                        </div>

                        <p className="mt-2 text-small-regular text-light-2">Last Revalution Date: {last_reval}</p>

                        {/* <div className="mt-5 flex flex-col gap-3">
                            <div className="flex gap-3.5">
                                <Image src="/assets/heart-gray.svg" alt="heart"  width={24} height={24} className="cursor-pointer" />
                            </div>
                        </div> */}

                    </div>

            </div>
        </div>

{/* 
        <h2 className="text-small-regular text-light-2">
            {last_reval}
        </h2> */}
    </article>
    </Link>
  );
}

export default ThreadCard;