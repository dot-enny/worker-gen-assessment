'use client'

import Modal from '../ui/Modal'
import { ChevronDownIcon, HandThumbDownIcon, HandThumbUpIcon, PaperAirplaneIcon, PencilIcon } from '@heroicons/react/24/outline';
import { ChartPieIcon, ChartBarIcon, CheckBadgeIcon, EnvelopeIcon, ShieldCheckIcon, SparklesIcon, TrophyIcon } from '@heroicons/react/24/solid';
import { ActionButton } from '../sidebar/ActionButton';
import { Avatar } from '../ui/Avatar';
import { Lead } from '@/types/types';
import Tabs from '../ui/Tabs';
import { VerticalSeparator } from '../ui/VerticalSeparator';
import { useState } from 'react';
import { classNames } from '@/utils/helpers/classNames';

interface LeadDetailsModalProps {
    open: boolean,
    setOpen: () => void,
    lead: Lead | null
}

export default function LeadDetailsModal({ open, setOpen, lead }: LeadDetailsModalProps) {
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
    return (
        <div className="w-full">
            <LeadInfo name={name} />
            <LeadDetails topic={topic} />
            <TabsSection />
            <div className="shadow-blue-50 shadow-xl rounded-lg text-sm grid gap-y-3">
                <WhyPickedLead />
                <AboutLead />
            </div>
        </div>
    )
};

const LeadInfo = ({ name }: { name: string }) => {
    return (
        <div className="flex gap-x-2 mt-4 p-2 border w-full rounded-lg">
            <Avatar />
            <div className="flex flex-col">
                <span className="font-bold text-gray-700">{name}</span>
                <span className="text-[10px]">COO &#183; Northwind Traders</span>
            </div>
        </div>
    )
};

const LeadDetails = ({ topic }: { topic: string }) => {
    return (
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
    )
};

const TabsSection = () => {
    return (
        <div className="mt-5">
            <Tabs />
        </div>
    )
};

const WhyPickedLead = () => {
    return (
        <div className="bg-white mt-4 shadow-blue-50 shadow-xl p-3 rounded-lg text-sm">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3">
                <span className="bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 text-transparent">Why I picked this lead</span>
                <ul className="list-disc list-inside text-xs mt-2">
                    <li>Jane is a key decision maker and was browsing espresso machines on First Coffee&apos;s website</li>
                    <li>Multiple people at her company have reported &apos;slowness&apos; during service requests</li>
                    <li>Northwind traders currently see $200M in revenue form their in-store coffee shops</li>
                </ul>
                <div className="grid grid-cols-3 gap-x-3 mt-4 w-[85%]">
                    <LeadAttribute icon={CheckBadgeIcon} label="Decision maker" value="Yes" />
                    <LeadAttribute icon={TrophyIcon} label="Potential deal value" value="Yes" />
                    <LeadAttribute icon={ChartBarIcon} label="Intent" value="High" />
                </div>
            </div>
            
            <div className="mt-2 flex items-center text-[0.625rem] gap-x-1">
                <ShieldCheckIcon className="size-[26px] p-1 bg-gray-100 rounded text-amber-300" />
                <span className="py-1 px-2 bg-gray-100 rounded flex items-center gap-x-1">
                    <span>1</span>
                    <VerticalSeparator className="h-[12px] bg-gray-100" />
                    <ChartPieIcon className="size-4 text-blue-500" />
                    <span className="text-xs">D365 sales</span>
                </span>
                <span className="py-1 px-2 bg-gray-100 rounded">+2</span>

                <span className="py-1 px-2 bg-gray-100 rounded ml-auto">AI generated content may be incorrect</span>

                <ActionButton icon={HandThumbUpIcon} size="4" className="text-gray-700" />
                <ActionButton icon={HandThumbDownIcon} size="4" className="text-gray-700" />
            </div>
        </div>
    )
};

const AboutLead = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="shadow rounded-lg p-4 bg-white">
            <div className="flex max-md:flex-col items-center gap-x-5">
                <span className="text-sm font-medium">About Jane</span>
                <ActionButton icon={ChevronDownIcon} srText="Open lead actions" size={4}
                    className={classNames(isOpen ? 'rotate-180' : '', 'text-gray-600 transition-transform ml-auto self-start shrink max-sm:hidden')}
                    onClick={() => setIsOpen(!isOpen)}
                />
            </div>
            <div className={classNames('grid transition-[grid-template-rows_500ms]', isOpen ? 'grid-rows-[1fr] mt-4' : 'grid-rows-[0fr]')}>
                <p className="overflow-hidden text-xs">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Quaerat sed doloremque deserunt nemo, aliquid incidunt officiis aliquam quia soluta, cupiditate, 
                    repellendus id sequi expedita itaque odit quae voluptatibus quam. 
                    Mollitiarepellendus id sequi expedita itaque odit quae voluptatibus quam. Mollitia.
                </p>
            </div>
        </div>
    )
}

const LeadAttribute = ({ icon: Icon, label, value }: { icon: React.ElementType, label: string, value: string }) => {
    return (
        <div className="bg-white rounded-lg p-3 flex items-center gap-x-2 shadow border">
            <Icon className="size-8 text-yellow-400" />
            <div className="flex flex-col">
                <span className="text-[0.625rem]">{label}</span>
                <span className="text-purple-400">{value}</span>
            </div>
        </div>
    )
};

const Footer = () => {
    return (
        <div className="flex gap-x-2">
            <ActionButton icon={HandThumbUpIcon} className="text-gray-600" />
            <ActionButton icon={HandThumbDownIcon} className="text-gray-600" />
        </div>
    )
};
