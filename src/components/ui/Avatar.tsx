import Image from 'next/image';

export const Avatar = () => {
    return (
        <>
            <span className="relative inline-block">
                <Image
                    alt=""
                    src="/images/tom-cook.avif"
                    className="size-8 rounded-full"
                    width={32}
                    height={32}
                />
                <span className="absolute bottom-0 right-0 block size-2 rounded-full bg-green-400 ring-2 ring-white" />
            </span>
        </>
    )
}