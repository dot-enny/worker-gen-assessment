'use client'

import { HandThumbDownIcon, HandThumbUpIcon, PaperAirplaneIcon, PencilIcon } from '@heroicons/react/24/outline';
import { EnvelopeIcon, SparklesIcon } from '@heroicons/react/24/solid';
import { Lead } from '@/types/types';
import Modal from '@/components/ui/Modal';
import { ActionButton } from '@/components/sidebar/ActionButton';

interface LeadDetailsModalProps {
    open: boolean,
    setOpen: () => void,
    lead: Lead | null
}

export default function AgentSkillModal({ open, setOpen, lead }: LeadDetailsModalProps) {
    return (
        lead && (
            <Modal open={open} setOpen={setOpen} header={<Header name={lead.name} />} body={<Body name={lead.name} topic={lead.topic} />} footer={<Footer />} />
        )
    )
};

const Header = ({ name }: { name: string }) => {
    return (
        <div className="flex items-center gap-x-2">
            <EnvelopeIcon className="size-8 text-indigo-400" />
            <span>Engage with {name}</span>
        </div>
    )
};

const Body = ({ name, topic }: { name: string, topic: string }) => {
    // const firstName = name.split(' ')[0];
    return (
        <div className="w-full">
            <div className="flex gap-x-2 mt-4 p-2 border w-full rounded-lg">
                <div className="flex flex-col">
                    <span className="font-bold text-gray-700">{name}</span>
                    <span className="text-[10px]">COO &#183; Northwind Traders</span>
                </div>
            </div>
            <div className="rounded-lg p-2 bg-gradient-to-r from-blue-50 to-purple-50 mt-4 flex justify-between flex-wrap gap-2">
                <div className="flex items-center gap-x-2 text-gray-700 bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                    <SparklesIcon className="size-4" />
                    <p className="mt-px text-transparent text-xs">{topic}</p>
                </div>
                <div className="text-[10px] flex gap-x-1">
                    <button className="border flex items-center gap-x-2 p-1 rounded-md bg-gray-50">
                        <PencilIcon className="size-3" />
                        <span>Edit</span>
                    </button>
                    <button className="border flex items-center gap-x-1 p-1 rounded-md bg-gray-50 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                        <PaperAirplaneIcon className="size-3" />
                        <span>Approve and send</span>
                    </button>
                </div>
            </div>
        </div>
    )
};

const Footer = () => {
    return (
        <div>
            {/* <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
            >
                <HandThumbUpIcon className="size-5" />
            </button>
            <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
                Cancel
            </button> */}
            <ActionButton icon={HandThumbUpIcon} />
            <ActionButton icon={HandThumbDownIcon} />
        </div>
    )
};


