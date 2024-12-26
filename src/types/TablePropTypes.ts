import React from "react";
import { Lead } from "./types";

interface TableProps {
    showLeadDetails: (lead: Lead) => void;
}
interface TableBodyProps {
    checkbox: React.RefObject<HTMLInputElement | null>;
    checked: boolean;
    toggleAll: () => void;
    selectedLeads: Lead[];
    setSelectedLeads: React.Dispatch<React.SetStateAction<Lead[]>>;
    showLeadDetails: (lead: Lead) => void;
    leads: Lead[];
    updateSortOptions: (sortOption: SortOptionType) => void;
}

interface TableHeaderProps {
    checkbox: React.RefObject<HTMLInputElement | null>;
    checked: boolean;
    toggleAll: () => void;
    updateSortOptions: (sortOption: SortOptionType) => void;
}
interface TableRowsProps {
    leads: Lead[];
    selectedLeads: Lead[];
    setSelectedLeads: React.Dispatch<React.SetStateAction<Lead[]>>;
    showLeadDetails: (lead: Lead) => void;
}

interface TableSearchProps {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

interface SortOptionType {
    name: string;
    type: string;
}

export type { TableProps, TableBodyProps, TableHeaderProps, TableRowsProps, TableSearchProps, SortOptionType };