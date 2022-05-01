import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom'

const navigation = [
    {
        name: 'Home',
        to: '/',
        current: false
    },
    {
        name: 'Contact',
        to: '/contact',
        current: false
    },
    {
        name: 'Department ↓',
        to: '#',
        current: false,
        list: [
            {
                name: 'CSE',
                to: 'cse'
            },
            {
                name: 'EEE',
                to: 'eee'
            },
            {
                name: 'Cvil E. ↓',
                to: '#',
                list: [
                    {
                        name: 'CSE',
                        to: '#'
                    },
                    {
                        name: 'EEE ↓',
                        to: '#',
                        list: [
                            {
                                name: 'CSE',
                                to: '#'
                            },
                            {
                                name: 'EEE',
                                to: '#'
                            },
                            {
                                name: 'Cvil E.',
                                to: '#',

                            },
                            {
                                name: 'MATH',
                                to: '#'
                            }
                        ]
                    },
                    {
                        name: 'Cvil E.',
                        to: '#'
                    },
                    {
                        name: 'MATH',
                        to: '#'
                    }
                ]
            },
            {
                name: 'MATH',
                to: 'math'
            }
        ]
    }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const LinkTitle = (prop) => {
    return (
        <NavLink
            key={prop.name}
            to={prop.to}
            className={
                ({ isActive }) => isActive ? `bg-gray-900 text-white ${classNames(prop.list ? 'text-blue-400' : 'text-gray-300',
                    'px-3 py-2 rounded-md text-sm font-medium block text-center')}` :
                    `text-gray-300 hover:bg-gray-700 hover:text-white ${classNames(prop.list ? 'text-blue-400' : 'text-gray-300',
                        'px-3 py-2 rounded-md text-sm font-medium block text-center')}`
            }
            aria-current={prop.current ? 'page' : undefined}
        >
            {prop.name}
        </NavLink>
    )
}

const DrowdownList = (prop) => {
    return (
        <Menu key={prop.name} as="div" className="relative">
            <div>
                <Menu.Button
                    className={classNames(
                        prop.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        prop.list ? 'text-blue-400' : 'text-gray-300',
                        'px-3 py-2 rounded-md text-sm font-medium block text-center  w-full'
                    )}
                >
                    {prop.name}
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
                <Menu.Items className="origin-top-right absolute right-0 z-50 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {prop?.list?.map((item) => {
                        if (item?.list?.length) {
                            return DrowdownList(item)
                        }
                        else {
                            return (
                                <Menu.Item key={item.name}>
                                    {({ active }) => (
                                        <NavLink
                                            to={item.to}
                                            className={classNames(active ? 'bg-gray-100' : '',
                                                'block px-4 py-2 text-sm text-gray-700 text-center'
                                            )}
                                        >
                                            {item.name}
                                        </NavLink>
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
            <div className="absolute w-full z-50">
                <Disclosure as="nav" className="bg-gray-800">
                    {({ open }) => (
                        <>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex items-center justify-between h-16">
                                    <div className="flex items-center flex-grow">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="w-14"
                                                src="assets/images/logo.png"
                                                alt="campuslib logo"
                                            />
                                        </div>
                                        <div className="hidden md:block ml-auto">
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
                                    {navigation.map((item) => {
                                        if (item?.list?.length) {
                                            return DrowdownList(item)
                                        }
                                        else
                                            return LinkTitle(item)
                                    })}
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </>
    )
}
