import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, DownloadIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    {
        name: 'Home',
        href: '#',
        current: true
    },
    {
        name: 'Department ↓',
        href: '#',
        current: false,
        list: [
            {
                name: 'CSE',
                href: '#'
            },
            {
                name: 'EEE',
                href: '#'
            },
            {
                name: 'Cvil E. ↓',
                href: '#',
                list: [
                    {
                        name: 'CSE',
                        href: '#'
                    },
                    {
                        name: 'EEE ↓',
                        href: '#',
                        list: [
                            {
                                name: 'CSE',
                                href: '#'
                            },
                            {
                                name: 'EEE',
                                href: '#'
                            },
                            {
                                name: 'Cvil E.',
                                href: '#',

                            },
                            {
                                name: 'MATH',
                                href: '#'
                            }
                        ]
                    },
                    {
                        name: 'Cvil E.',
                        href: '#'
                    },
                    {
                        name: 'MATH',
                        href: '#'
                    }
                ]
            },
            {
                name: 'MATH',
                href: '#'
            }
        ]
    }
]
const tmp_navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Department ↓', href: '#', current: false }
]
const userNavigation = [
    { name: 'CSE', href: '#' },
    { name: 'EEE', href: '#' },
    { name: 'Cvil E.', href: '#' },
    { name: 'MATH', href: '#' }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const LinkTitle = (prop) => {
    return (
        <a
            key={prop.name}
            href={prop.href}
            className={classNames(
                prop.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                prop.list ? 'text-blue-400' : 'text-gray-300',
                'px-3 py-2 rounded-md text-sm font-medium block'
            )}
            aria-current={prop.current ? 'page' : undefined}
        >
            {prop.name}
        </a>
    )
}

const DrowdownList = (prop) => {
    return (
        <Menu key={prop.name} as="div" className="relative">
            <div>
                <Menu.Button className="block w-full">
                    {LinkTitle(prop)}
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute z-50 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {prop?.list?.map((item) => {
                        if (item?.list?.length) {
                            return DrowdownList(item)
                        }
                        else {
                            return (
                                <Menu.Item key={item.name}>
                                    {({ active }) => (
                                        <a
                                            href={item.href}
                                            className={classNames(
                                                active ? 'bg-gray-100' : '',
                                                'block px-4 py-2 text-sm text-gray-700'
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                    )}
                                </Menu.Item>
                            )
                        }
                    })}
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default function Navigation() {
    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-gray-800">
                    {({ open }) => (
                        <>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex items-center justify-between h-16">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-8 w-8"
                                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                                alt="Workflow"
                                            />
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-baseline space-x-4">
                                                {navigation.map((item) => {
                                                    if (item?.list?.length) {
                                                        return DrowdownList(item)
                                                    }
                                                    else
                                                        return LinkTitle(item)
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                    {LinkTitle(navigation[0])}
                                    {DrowdownList(navigation[1])}
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                    </div>
                </header>
                <main>
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        {/* Replace with your content */}
                        <div className="px-4 py-6 sm:px-0">
                            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
                        </div>
                        {/* /End replace */}
                    </div>
                </main>
            </div>
        </>
    )
}
