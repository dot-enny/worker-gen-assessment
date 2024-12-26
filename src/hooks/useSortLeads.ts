import { SortOptionType } from "@/types/TablePropTypes";
import { Lead } from "@/types/types";
import { useState } from "react";

export const useSortLeads = (leads: Lead[]) => {
    const [sortOptions, setSortOptions] = useState<SortOptionType[]>([]);

    const updateSortOptions = (sortOption: SortOptionType) => {
        setSortOptions(prevOptions => {
            const existingOptionIndex = prevOptions.findIndex(option => option.name === sortOption.name);
            if (existingOptionIndex !== -1) {
                return prevOptions.filter(option => option.name !== sortOption.name);
            }

            const sameTypeIndex = prevOptions.findIndex(option => option.type === sortOption.type);
            if (sameTypeIndex !== -1) {
                return prevOptions.map((option, index) => 
                    index === sameTypeIndex ? sortOption : option
                );
            }

            return [...prevOptions, sortOption];
        });
    };

    const sortLeads = (leads: Lead[]) => {
        return leads.sort((a, b) => {
            for (const option of sortOptions) {
                if (option.type === 'name') {
                    if (option.name === 'A-Z') {
                        return a.name.localeCompare(b.name);
                    } else if (option.name === 'Z-A') {
                        return b.name.localeCompare(a.name);
                    }
                } else if (option.type === 'status') {
                    if (option.name === 'New') {
                        return b.statusReason.localeCompare(a.statusReason);
                    } else if (option.name === 'Existing') {
                        return a.statusReason.localeCompare(b.statusReason);
                    }
                } else if (option.type === 'date') {
                    const dateA = new Date(a.createdOn);
                    const dateB = new Date(b.createdOn);
                    if (option.name === 'Newest-Oldest') {
                        return dateB.getTime() - dateA.getTime();
                    } else if (option.name === 'Oldest-Newest') {
                        return dateA.getTime() - dateB.getTime();
                    }
                }
            }
            return 0;
        });
    };

    let sortedLeads = leads;

    if(sortOptions.length === 1) {
        sortedLeads = sortLeads(leads);
    }
    if(sortOptions.length > 1) {
        sortedLeads = sortLeads(leads);
    }

    return { updateSortOptions, sortedLeads };
};
