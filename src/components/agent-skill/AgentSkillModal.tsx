'use client'

import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { Lead } from '@/types/types';
import Modal from '@/components/ui/Modal';

interface LeadDetailsModalProps {
    open: boolean,
    setOpen: () => void,
    lead: Lead | null
}

export default function AgentSkillModal({ open, setOpen, lead }: LeadDetailsModalProps) {
    return (
        lead && (
            <Modal open={open} setOpen={setOpen} header={<Header />} body={<Body />} footer={<Footer />} />
        )
    )
};

const Header = () => {
    return (
        <div className="flex items-center gap-x-2">
            <WrenchScrewdriverIcon className="size-6 text-indigo-400" />
            <span className="text-lg">Agent Skill</span>
        </div>
    )
};

const Body = () => {
    return (
        <div className="w-full">
            <div className="flex gap-x-2 mt-4 p-4 border w-full rounded-lg shadow">
                <div className="flex flex-col gap-y-3">
                    <span className="font-medium text-gray-800">Check if hand on inventory will allow sales orders to ship without delay</span>
                    <p className="text-sm text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam consequuntur ipsa fugiat, amet suscipit minus assumenda delectus quam iste? Nemo iure quia corrupti voluptate aspernatur veritatis. Deleniti eius earum numquam?</p>
                </div>
            </div>

            <div className="mt-6 flex flex-col gap-y-2">
                <div className="flex gap-x-3">
                    <EnvelopeIcon className="size-6 text-blue-500" />
                    <span className="font-medium text-lg">Enable email access</span>
                </div>
                <p className="text-gray-700">Allow the agent to access email inboxes to read mail from know vendors</p>
                <div className="flex justify-between gap-x-3">
                    <input type="text" value="purchasing@contoso.com" 
                        className="flex-1 rounded-md border text-sm border-gray-300 py- px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" disabled 
                    />
                    <button type="button" className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded-md">
                        Allow access
                    </button>
                </div>
            </div>
        </div>
    )
};

const Footer = () => {
    return (
        <div className="flex gap-x-3">
            <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-gray-50 px-3 py-2 text-sm font-semibold text-blue-500 shadow-sm hover:bg-gray-100 sm:ml-3 sm:w-auto"
            >
                Activate
            </button>
            <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
                Close
            </button>
        </div>
    )
};


