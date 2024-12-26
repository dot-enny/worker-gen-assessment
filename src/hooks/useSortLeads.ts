import { SortOptionType } from "@/types/TablePropTypes";
import { Lead } from "@/types/types";
import { useState } from "react";

export const useSortLeads = (leads: Lead[]) => {
    const [sortOption, setSortOption] = useState<SortOptionType | null>(null);

    const updateSortOption = (sortOption: SortOptionType) => {
        setSortOption((prev) => prev?.name === sortOption.name ? null : sortOption);
    };

    let sortedLeads = leads;
    if (!sortOption) return { sortOption, updateSortOption, sortedLeads };

    const sortLeads = (leads: Lead[]) => {
        return leads.sort((a, b) => {
            if (sortOption.type === 'name') {
                if (sortOption.name === 'A-Z') {
                    return a.name.localeCompare(b.name);
                } else if (sortOption.name === 'Z-A') {
                    return b.name.localeCompare(a.name);
                }
            } else if (sortOption.type === 'status') {
                if (sortOption.name === 'New') {
                    return b.statusReason.localeCompare(a.statusReason);
                } else if (sortOption.name === 'Existing') {
                    return a.statusReason.localeCompare(b.statusReason);
                }
            } else if (sortOption.type === 'date') {
                const dateA = new Date(a.createdOn);
                const dateB = new Date(b.createdOn);
                if (sortOption.name === 'Newest-Oldest') {
                    return dateB.getTime() - dateA.getTime();
                } else if (sortOption.name === 'Oldest-Newest') {
                    return dateA.getTime() - dateB.getTime();
                }
            }
            return 0;
        });
    };

    sortedLeads = sortLeads(leads);

    return { sortOption, updateSortOption, sortedLeads };
};
