import { SortOptionType } from '@/types/TablePropTypes'
import { classNames } from '@/utils/helpers/classNames'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/24/outline'

interface SortMenuProps {
    sortOptions: SortOptionType[],
    updateSortOption: (sortOption: SortOptionType) => void,
    selectedSortOption: SortOptionType | null
}

export default function SortMenu({ sortOptions, updateSortOption, selectedSortOption }: SortMenuProps) {

    const handleSelect = (item: SortOptionType) => {
        updateSortOption(item)
    };

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus-visible:outline-blue-500 -outline-offset-1">
                    <span className="sr-only">Open filters</span>
                    <ChevronDownIcon aria-hidden="true" className="size-5" />
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute -right-6 z-50 mt-2 min-w-max divide-y divide-gray-100 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <div className="px-4 py-3">Sort by</div>
                <div className="py-1">
                    {sortOptions.map((item) => (
                        <MenuItem key={item.name}>
                            {({ focus }) => (
                                <div
                                    onClick={() => handleSelect(item)}
                                    className={`flex items-center justify-between gap-x-3 px-4 py-2 text-sm cursor-pointer ${selectedSortOption?.name === item.name
                                        ? 'text-gray-900'
                                        : 'text-gray-700'
                                        } ${focus ? 'bg-gray-100' : ''}`}
                                >
                                    <span>{item.name}</span>
                                    <CheckIcon 
                                        aria-hidden="true"       
                                        className={classNames('w-5 h-5 text-blue-500', 
                                            selectedSortOption?.name === item.name ? 'visible' : 'invisible'
                                        )} 
                                    />
                                </div>
                            )}
                        </MenuItem>
                    ))}
                </div>
            </MenuItems>
        </Menu>
    )
}
