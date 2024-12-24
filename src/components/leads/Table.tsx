'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import { classNames } from '@/utils/helpers/classNames'
import { Lead } from '@/types/types';
import { leads } from '@/json-data/LeadsData';
import { TableProps, TableBodyProps, TableHeaderProps, TableRowsProps } from '@/types/TablePropTypes';

const filterLeads = (leads: Lead[], searchQuery: string) => {
    return leads.filter(lead =>
        lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.statusReason.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.createdOn.toLowerCase().includes(searchQuery.toLowerCase())
    );
};


export default function Table({ showLeadDetails }: TableProps) {
    const checkbox = useRef<HTMLInputElement>(null)
    const [checked, setChecked] = useState(false)
    const [indeterminate, setIndeterminate] = useState(false)
    const [selectedLeads, setSelectedLeads] = useState<typeof leads>([])
    const [searchQuery, setSearchQuery] = useState('')

    useLayoutEffect(() => {
        const isIndeterminate = selectedLeads.length > 0 && selectedLeads.length < leads.length
        setChecked(selectedLeads.length === leads.length)
        setIndeterminate(isIndeterminate)
        if (checkbox.current) {
            checkbox.current.indeterminate = isIndeterminate
        }
    }, [selectedLeads])

    function toggleAll() {
        setSelectedLeads(checked || indeterminate ? [] : leads)
        setChecked(!checked && !indeterminate)
        setIndeterminate(false)
    }

    const filteredLeads = filterLeads(leads, searchQuery);

    return (
        <div className="border shadow bg-white mt-8 rounded">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <div className="mt-8 flow-root bg-white overflow-auto">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="relative">
                            {selectedLeads.length > 0 && (
                                <div className="absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12">
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                                    >
                                        Delete all
                                    </button>
                                </div>
                            )}
                            <TableBody checkbox={checkbox} checked={checked} toggleAll={toggleAll} selectedLeads={selectedLeads} setSelectedLeads={setSelectedLeads} showLeadDetails={showLeadDetails} filteredLeads={filteredLeads} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


const TableBody = ({ checkbox, checked, toggleAll, selectedLeads, setSelectedLeads, showLeadDetails, filteredLeads }: TableBodyProps) => {

    return (
        <table className="min-w-full table-fixed divide-y divide-gray-300">
            <TableHeader checkbox={checkbox} checked={checked} toggleAll={toggleAll} />
            <TableRows leads={filteredLeads} selectedLeads={selectedLeads} setSelectedLeads={setSelectedLeads} showLeadDetails={showLeadDetails} />
        </table>
    )
};

const TableHeader = ({ checkbox, checked, toggleAll }: TableHeaderProps) => {
    return (
        <thead className="">
            <tr>
                <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                    <div className="group absolute left-4 top-1/2 -mt-2 grid size-4 grid-cols-1">
                        <input
                            type="checkbox"
                            className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                            ref={checkbox}
                            checked={checked}
                            onChange={toggleAll}
                        />
                        <svg
                            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                            viewBox="0 0 14 14"
                            fill="none"
                        >
                            <path
                                className="opacity-0 group-has-[:checked]:opacity-100"
                                d="M3 8L6 11L11 3.5"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                d="M3 7H11"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </th>
                <th scope="col" className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                    Name
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Topic
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Status Reason
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Created on
                </th>
            </tr>
        </thead>
    )
};

const TableRows = ({ leads, selectedLeads, setSelectedLeads, showLeadDetails }: TableRowsProps) => {
    return (
        <tbody className="divide-y divide-gray-200 bg-white">
            {leads.map((lead) => (
                <tr key={lead.name} className={selectedLeads.includes(lead) ? 'bg-gray-50' : undefined}>
                    <td className="relative px-7 sm:w-12 sm:px-6">
                        {selectedLeads.includes(lead) && (
                            <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                        )}
                        <Checkbox
                            lead={lead}
                            selectedLeads={selectedLeads}
                            setSelectedLeads={setSelectedLeads}
                        />
                    </td>
                    <td
                        className={classNames(
                            'whitespace-nowrap py-4 pr-3 text-sm font-medium',
                            selectedLeads.includes(lead) ? 'text-indigo-600' : 'text-blue-500',
                        )}
                    >
                        <span className="cursor-pointer" onClick={() => showLeadDetails(lead)}>{lead.name}</span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">{lead.topic}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">{lead.statusReason}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">{lead.createdOn}</td>
                </tr>
            ))}
        </tbody>
    )
};

const Checkbox = ({ lead, selectedLeads, setSelectedLeads }: { lead: Lead, selectedLeads: typeof leads, setSelectedLeads: React.Dispatch<React.SetStateAction<typeof leads>> }) => {
    return (
        <div className="group absolute left-4 top-1/2 -mt-2 grid size-4 grid-cols-1">
            <input
                type="checkbox"
                className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                value={lead.name}
                checked={selectedLeads.includes(lead)}
                onChange={(e) =>
                    setSelectedLeads(
                        e.target.checked
                            ? [...selectedLeads, lead]
                            : selectedLeads.filter((p) => p !== lead),
                    )
                }
            />
            <svg
                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                viewBox="0 0 14 14"
                fill="none"
            >
                <path
                    className="opacity-0 group-has-[:checked]:opacity-100"
                    d="M3 8L6 11L11 3.5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className="opacity-0 group-has-[:indeterminate]:opacity-100"
                    d="M3 7H11"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    )
};

const SearchBar = ({ searchQuery, setSearchQuery }: { searchQuery: string, setSearchQuery: React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <div className="sm:flex sm:items-center m-4">
            <div className="sm:flex-auto">
                <input
                    type="search"
                    className="w-full border rounded-md shadow-sm sm:w-96 focus:outline-blue-500 outline-offset-0 sm:text-sm px-3 py-2"
                    placeholder="Sort, filter and search with Copilot"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
        </div>
    )
};
