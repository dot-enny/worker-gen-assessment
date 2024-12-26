'use client'

import { useRef, useState } from 'react'
import { classNames } from '@/utils/helpers/classNames'
import { Lead } from '@/types/types';
import { leads as initialLeads } from '@/json-data/LeadsData';
import { TableProps, TableBodyProps, TableHeaderProps, TableRowsProps, TableSearchProps } from '@/types/TablePropTypes';
import SortMenu from './table/Sort';
import { sortData } from '@/json-data/SortOptions';
import { useFilterLeads } from '@/hooks/useFilterLeads';
import { useSortLeads } from '@/hooks/useSortLeads';
import { useSelectLeads } from '@/hooks/useSelectLeads';

const TableContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="border shadow bg-white mt-8 rounded">
            {children}
        </div>
    );
};

const TableActions = ({ selectedLeads, deleteSelectedLeads }: { selectedLeads: Lead[], deleteSelectedLeads: () => void }) => {
    return (
        <>
            {selectedLeads.length > 0 && (
                <div className="absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12">
                    <button
                        type="button"
                        className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white z-10"
                        onClick={deleteSelectedLeads}
                    >
                        Delete all
                    </button>
                </div>
            )}
        </>
    );
};

const TableContent = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="mt-8 flow-root bg-white overflow-auto">
            <div className="overflow-auto sm:-mx- lg:-mx-">
                <div className="inline-block min-w-full py-2 align-middle sm:px- lg:px-">
                    <div className="relative">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Table({ showLeadDetails }: TableProps) {
    const checkbox = useRef<HTMLInputElement>(null);
    const [leads, setLeads] = useState(initialLeads);

    const { searchQuery, setSearchQuery, filteredLeads } = useFilterLeads(leads);
    const { sortOption, updateSortOption, sortedLeads } = useSortLeads(filteredLeads);
    const { checked, selectedLeads, setSelectedLeads, toggleAll } = useSelectLeads(checkbox);

    const deleteSelectedLeads = () => {
        setLeads(leads.filter(lead => !selectedLeads.includes(lead)));
        setSelectedLeads([]);
    };

    return (
        <TableContainer>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <TableContent>
                <TableActions selectedLeads={selectedLeads} deleteSelectedLeads={deleteSelectedLeads} />
                <TableBody
                    checkbox={checkbox}
                    checked={checked}
                    toggleAll={toggleAll}
                    selectedLeads={selectedLeads}
                    setSelectedLeads={setSelectedLeads}
                    showLeadDetails={showLeadDetails}
                    leads={sortedLeads}
                    updateSortOption={updateSortOption}
                    selectedSortOption={sortOption}
                />
            </TableContent>
        </TableContainer>
    );
};

const TableBody = ({ checkbox, checked, toggleAll, selectedLeads, setSelectedLeads, showLeadDetails, leads, updateSortOption, selectedSortOption }: TableBodyProps) => {
    return (
        <table className="min-w-full table-fixed divide-y divide-gray-300">
            <TableHeader checkbox={checkbox} checked={checked} toggleAll={toggleAll} updateSortOption={updateSortOption} selectedSortOption={selectedSortOption} />
            <TableRows leads={leads} selectedLeads={selectedLeads} setSelectedLeads={setSelectedLeads} showLeadDetails={showLeadDetails} />
        </table>
    )
};

const TableHeader = ({ checkbox, checked, toggleAll, updateSortOption, selectedSortOption }: TableHeaderProps) => {
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
                    <div className="flex">
                        <span className="mr-4">Name</span>
                        <SortMenu sortOptions={sortData.nameOptions} updateSortOption={updateSortOption} selectedSortOption={selectedSortOption} />
                    </div>
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Topic
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    <div className="flex">
                        <span className="mr-4">Status Reason</span>
                        <SortMenu sortOptions={sortData.statusOptions} updateSortOption={updateSortOption} selectedSortOption={selectedSortOption} />
                    </div>
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    <div className="flex">
                        <span className="mr-4">Created on</span>
                        <SortMenu sortOptions={sortData.dateOptions} updateSortOption={updateSortOption} selectedSortOption={selectedSortOption} />
                    </div>
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

const Checkbox = ({ lead, selectedLeads, setSelectedLeads }: { lead: Lead, selectedLeads: Lead[], setSelectedLeads: React.Dispatch<React.SetStateAction<Lead[]>> }) => {
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

const SearchBar = ({ searchQuery, setSearchQuery }: TableSearchProps) => {
    return (
        <div className="sm:flex sm:items-center m-4">
            <div className="sm:flex-auto">
                <input
                    type="search"
                    className="w-full border rounded-md shadow-sm sm:w-96 focus:outline-blue-500 outline-offset-0 sm:text-sm px-3 py-2"
                    placeholder="Filter by search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
        </div>
    )
};
