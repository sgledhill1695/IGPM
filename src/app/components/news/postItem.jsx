import Link from "next/link";

export default function PostItem({post}){

    return(
        <>
            <div className="flex flex-col w-[232px] relative">

                <img src={post.image} className="w-[232px]"></img>
                <p className="text-[#1C4F70] text-[13px] mt-[14px] onset-semibold">{post.category}</p>

                <div className="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-3 fill-[#1C4F70]" height="0.9em" viewBox="0 0 448 512"><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" /></svg>
                    <p className="mt-[12px] text-[14px]">{post.date}</p>
                </div>

                <p className="mt-3 text-[#404040] onset-semibold text-[15px]">{post.title}</p>
                <p className="text-[14px] mt-3 opacity-50" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                
                <Link href={'/news/show?post=' + post.id} className="absolute bottom-[-30px] text-[#1C4F70] text-[14px] onset-semibold">Read More</Link>

            </div>
        </>
    )
}