import { VerticalSeparator } from "@/components/ui/VerticalSeparator";
import { ClockIcon } from "@heroicons/react/24/outline";

export default function ProgressBar() {
    return (
        <div className="text-[10px] flex-1">
            <h4 className="sr-only">Status</h4>
            <div className="font-medium text-gray-900 flex items-center">
                <div className="flex items-center gap-x-1 flex-1">
                    <ClockIcon  className="size-3" />
                    <span>1 month until Q4 ends</span>
                </div>
                <div className="flex-1 flex justify-between">
                    <span className="ml-1">Target $45million</span>
                    <span>68% of target achieved</span>
                </div>
            </div>
            <div aria-hidden="true" className="mt-1 rounded-full relative">
                <div className="rounded-full bg-gray-200 flex h-2 relative">
                    <div style={{ width: '22.5%' }} className="bg-green-300 rounded-tl-full rounded-bl-full" />
                    <div style={{ width: '12.5%' }} className="bg-blue-300" />
                    <div style={{ width: '5.5%' }} className="bg-purple-300" />
                    <div style={{ width: '3.5%' }} className="bg-yellow-400" />
                    <VerticalSeparator className="absolute -mt-4 top-0 h-10 mx-auto left-0 right-0" />
                </div>
                <div className="mt-1 font-medium text-gray-600 sm:flex flex-wrap gap-x-2">
                    <ProgressMarker color="green" name="Won $18m" />
                    <ProgressMarker color="blue" name="Committed $8m" />
                    <ProgressMarker color="purple" name="Best case $7m" />
                    <ProgressMarker color="yellow" name="Qualified $3m" />
                    <ProgressMarker color="grey" name="Leads $75m" />
                </div>
            </div>
        </div>
    )
};

interface ProgressMarkerProps {
    color: 'green' | 'blue' | 'purple' | 'yellow' | 'grey',
    name: string,
}
const ProgressMarker = ({ color, name }: ProgressMarkerProps) => {

    const indicatorColor = color === 'purple' ? 'bg-purple-300' :
        color === 'green' ? 'bg-green-300' :
            color === 'blue' ? 'bg-blue-400' :
                color === 'yellow' ? 'bg-yellow-400' :
                    color === 'grey' ? 'bg-gray-200' : '';


    return (
        <div className="flex items-center gap-x-1">
            <span className={`block size-2 rounded-full ${indicatorColor} ring-2 ring-white`} />
            <span>{name}</span>
        </div>
    )
};
