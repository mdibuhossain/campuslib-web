import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import { useAuth } from '../Hooks/useAuth';
import { CircularProgress } from '@mui/material';
import DownloadButtonWithAnimate from './Download_Button/DownloadButtonWithAnimate';
import useUtility from '../Hooks/useUtility';



const usersRoute = [
    {
        name: 'Settings',
        to: '/settings'
    },
    {
        name: 'Pending Request',
        to: '/pending'
    },
    {
        name: 'My Content',
        to: '/mycontent'
    }
]

const adminRoute = [
    // {
    //     name: 'Test File upload',
    //     to: '/test'
    // },
    {
        name: 'Manage Content',
        to: '/manage'
    },
    {
        name: 'Make Admin',
        to: '/makeadmin'
    },
    {
        name: 'Settings',
        to: '/settings'
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ProfileButton = () => {
    const { user, logOut, admin } = useAuth();
    if (user?.email)
        return (
            <Menu as="div" className="ml-3 relative z-50">
                <div>
                    <Menu.Button className="bg-gray-800 flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <img
                            className="h-8 w-8 rounded-full"
                            src={user?.photoURL}
                            alt=""
                        />
                        <span className="mx-2 font-semibold text-gray-100">{user?.displayName?.split(' ')[0]}</span>
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
                    <Menu.Items className="bg-gray-700 origin-top-right absolute md:right-0 -right-20 mt-2 w-48 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {/* Admin and normal user features */}
                        {admin &&
                            adminRoute.map(route => (
                                <Menu.Item key={route?.name}>
                                    {({ active }) => (
                                        <NavLink to={route.to}
                                            className={classNames(active ? 'bg-gray-800' : '', 'block px-4 py-2 text-sm text-gray-200')}
                                        >
                                            {route.name}
                                        </NavLink>
                                    )}
                                </Menu.Item>
                            ))}
                        {!admin &&
                            usersRoute.map(route => (
                                <Menu.Item key={route?.name}>
                                    {({ active }) => (
                                        <NavLink to={route.to}
                                            className={classNames(active ? 'bg-gray-800' : '', 'block px-4 py-2 text-sm text-gray-200')}
                                        >
                                            {route.name}
                                        </NavLink>
                                    )}
                                </Menu.Item>
                            ))
                        }
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink to="#"
                                    className={classNames(active ? 'bg-gray-800' : '', 'block px-4 py-2 text-sm text-gray-200')}
                                    onClick={logOut}
                                >
                                    Sign out
                                </NavLink>
                            )}
                        </Menu.Item>
                        <div className="md:hidden p-5">
                            <DownloadButtonWithAnimate />
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        )
    return (
        <div className="xs:block md:hidden ml-11">
            <DownloadButtonWithAnimate />
        </div>
    )


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
            <Disclosure.Button>
                {prop.name} {prop.icon ? prop.icon : ''}
            </Disclosure.Button>
        </NavLink>
    )
}

const DropdownItem = (prop, active) => {
    return (
        <NavLink
            to={prop.to}
            className={'bg-gray-700 hover:bg-gray-800 block text-sm text-gray-200 text-center'}
        >
            <Disclosure.Button className="block w-full text-inherit py-2">
                {prop.name}
            </Disclosure.Button>
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
                        prop.list ? 'text-blue-500' : 'text-gray-300',
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
                <Menu.Items className="bg-gray-700 origin-top-right absolute right-0 z-50 mt-2 max-h-96 overflow-auto w-48 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {prop?.list?.map((item) => {
                        if (item?.list?.length) {
                            return DrowdownList(item)
                        }
                        else {
                            return (
                                <Menu.Item key={item?.name}>
                                    {({ active }) => (
                                        DropdownItem(item, active)
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
    const { user, isLoading } = useAuth();
    const { deptNavList, deptLoading } = useUtility()
    const navigation = [
        {
            name: 'Home',
            to: '/'
        },
        {
            name: 'Department ↓',
            list: deptNavList
        },
        {
            name: 'Upload',
            to: '/request'
        },
        {
            name: '',
            icon: <SearchIcon />,
            to: '/search'
        }
    ]
    return (
        <>
            <div className="w-full z-50">
                <Disclosure as="nav" className="bg-gray-800">
                    {({ open }) => (
                        <>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex items-center justify-between h-16">
                                    <div className="relative flex items-center flex-grow">
                                        <div className="flex-shrink-0">
                                            <NavLink to="/">
                                                <img
                                                    className="w-14"
                                                    src="assets/images/logo.webp"
                                                    alt="campuslib logo"
                                                />
                                            </NavLink>
                                        </div>
                                        <div className="xs:block md:hidden absolute z-50" style={{
                                            "left": "50%", "transform": "translate(-50%, 0)"
                                        }}>
                                            {isLoading ? <CircularProgress color="info" /> : ProfileButton()}
                                        </div>
                                        <div className="hidden md:block ml-auto">
                                            <div className="ml-10 flex items-center space-x-4">
                                                {navigation.map((item) => {
                                                    if (item?.list?.length) {
                                                        return (!deptLoading ? DrowdownList(item) : null)
                                                    }
                                                    else
                                                        return LinkTitle(item)
                                                })}
                                                {!user?.email && LinkTitle({ name: "Login", to: "/login" })}
                                                {isLoading ? <CircularProgress color="info" /> : ProfileButton()}
                                                <DownloadButtonWithAnimate />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button hamburger icon */}
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

                            {/* Mobile Panel */}
                            <Disclosure.Panel className="md:hidden">
                                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                    {navigation.map((item) => {
                                        if (item?.list?.length) {
                                            return (!deptLoading ? DrowdownList(item) : null)
                                        }
                                        else
                                            return LinkTitle(item)
                                    })}
                                    {!user?.email && LinkTitle({ name: "Login", to: "/login" })}
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </>
    )
}
