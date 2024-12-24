import { Avatar } from "@/components/ui/Avatar"
import { EnvelopeIcon } from "@heroicons/react/24/outline"

export const ActivityCard = () => {
    return (
        <div className="border shadow-sm rounded-xl p-3 text-xs flex flex-col gap-y-1">
            <div className="flex gap-x-2">
                <Avatar />
                <div className="flex flex-col">
                    <span className="font-bold text-gray-700">Jane Reyes</span>
                    <span className="text-[10px]">Woodland Bank &#183; $280,000 &#183; 8 days to close</span>
                </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-2">
                <div className="flex items-center gap-x-2 font-medium text-gray-700">
                    <EnvelopeIcon className="size-4" />
                    <span>Engage with Jane Reyes</span>
                </div>
            </div>
        </div>
    )
}
