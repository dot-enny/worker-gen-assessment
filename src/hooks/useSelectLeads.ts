import { leads } from '@/json-data/LeadsData'
import { useState, useLayoutEffect, RefObject } from 'react'

export const useSelectLeads = (checkbox: RefObject<HTMLInputElement | null>) => { 

    const [checked, setChecked] = useState(false)
    const [indeterminate, setIndeterminate] = useState(false)
    const [selectedLeads, setSelectedLeads] = useState<typeof leads>([])

     function toggleAll() {
        setSelectedLeads(checked || indeterminate ? [] : leads)
        setChecked(!checked && !indeterminate)
        setIndeterminate(false)
    }

    useLayoutEffect(() => {
        const isIndeterminate = selectedLeads.length > 0 && selectedLeads.length < leads.length
        setChecked(selectedLeads.length === leads.length)
        setIndeterminate(isIndeterminate)
        if (checkbox.current) {
            checkbox.current.indeterminate = isIndeterminate
        }
    }, [selectedLeads])

    return { checked, selectedLeads, setSelectedLeads, toggleAll };
};