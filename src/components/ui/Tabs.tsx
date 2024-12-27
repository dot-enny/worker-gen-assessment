import { useState } from 'react';
import { classNames } from '@/utils/helpers/classNames';

const initialTabs = [
    { name: 'Engage', href: '#', current: false },
    { name: 'Research', href: '#', current: true },
];

export default function Tabs() {
    const [tabs, setTabs] = useState(initialTabs);

    const handleTabSwitch = (tabName: string) => {
        setTabs(tabs.map(tab => ({
            ...tab,
            current: tab.name === tabName
        })));
    };

    return (
        <div>
            <div className="">
                <nav aria-label="Tabs" className="isolate flex rounded-lg shadow">
                    {tabs.map((tab, tabIdx) => (
                        <span
                            key={tab.name}
                            className={classNames(
                                tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                                tabIdx === 0 ? 'rounded-l-lg' : '',
                                tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                                'group relative min-w-0 flex- overflow-hidden bg-white px-4 py-2 pt-3 text-center text-sm font-medium hover:bg-gray-50 focus:z-10 cursor-pointer',
                            )}
                            onClick={() => handleTabSwitch(tab.name)}
                        >
                            <span>{tab.name}</span>
                            <span
                                aria-hidden="true"
                                className={classNames(
                                    tab.current ? 'bg-blue-500 scale-x-1' : 'bg-transparent scale-x-0',
                                    'absolute inset-x-0 bottom-0 h-0.5 transition-transform duration-150',
                                )}
                            />
                        </span>
                    ))}
                </nav>
            </div>
        </div>
    );
}
