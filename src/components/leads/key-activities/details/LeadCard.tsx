import { Avatar } from "@/components/ui/Avatar"
import { EnvelopeIcon } from "@heroicons/react/24/outline"

export const LeadCard = () => {
    return (
        <div className="border shadow-sm w-fit rounded-xl p-3 text-xs flex flex-col gap-y-2">
            <div className="flex gap-x-2">
                <Avatar />
                <div className="flex flex-col">
                    <span className="font-bold text-gray-700">Jane Reyes</span>
                    <span className="text-[10px]">COO &#183; Northwind Traders</span>
                </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-2">
                <div className="flex items-center gap-x-2 font-bold text-gray-700">
                    <EnvelopeIcon className="size-4" />
                    <span>Engage with Jane Reyes</span>
                </div>
                <p className="mt-px">Jane may be interested in upgrading espresso machines for her in-store coffee shops.</p>
            </div>
            <div className="text-[10px] flex items-center gap-x-1">
                <span>Expand Business</span>
                <span>&#183;</span>
                <span>High buying intent</span>
            </div>
        </div>
    )
}
