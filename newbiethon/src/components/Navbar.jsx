import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/images/logo.png'
import Notification from './Notifcations'
import styles from '../css/Notifcation.module.css'
const navigation = [
  { name: 'Dashboard', href: '/medi/dashboard', current: true },
  { name: 'Add Prescription', href: '/medi/add', current: false },
  { name: 'Notification', href: '#', current: false },
  { name: 'Common Diseases', href: '/medi/diseases', current: false },
]
const notifications = [
  { title: 'Prescription running out for lorem ❗', href: '', key: 1 },
  { title: 'Prescription running out for lorem ❗', href: '', key: 2 },
  { title: 'Prescription running out for lorem ❗', href: '', key: 3 },
  { title: 'Prescription running out for lorem ❗', href: '', key: 4 },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const navBar = () => {
  const options = document.querySelector('a')
  options.forEach((option) => {
    option.addEventListener('click', () => {
      removeSelected()
      option.class = classNames(
        'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium'
      )
    })
  })
}

const removeSelected = () => {
  const options = document.querySelectorAll('.option')

  options.forEach((option) => {
    option.classList = classNames(
      'text-gray-300 hover:bg-gray-700 hover:text-white option rounded-md px-3 py-2 text-sm font-medium option'
    )
  })
}

const changeStatus = (e) => {
  removeSelected()
  e.target.classList = classNames(
    'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium option'
  )
  console.log(e.target.classList)
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-background">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto rounded-[80%]"
                    src="https://th.bing.com/th/id/OIP.GYVDsYWKuX3QH5SN0YFFZwHaG2?rs=1&pid=ImgDetMain"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          'text-gray-300 hover:bg-gray-700 hover:text-white option rounded-md px-3 py-2 text-sm font-medium option'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        onClick={(event) => changeStatus(event)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <Notification />
                </button> */}
                <Menu as="div" className="relative ml-3 notifcationBar">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-primary text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <BellIcon className="h-6 w-6 " aria-hidden="true" />
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-80  origin-top-right rounded-md bg-background py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {notifications.map((notification) => {
                        return (
                          <Menu.Item key={notification.key}>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-800' : '',
                                  'block px-4 text-sm text-text py-4 text-center text-md  '
                                )}
                              >
                                {notification.title}
                              </a>
                            )}
                          </Menu.Item>
                        )
                      })}
                      {/* <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-text'
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item> */}
                      {/* <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-text'
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm  text-text'
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item> */}
                    </Menu.Items>
                  </Transition>
                </Menu>
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="data:image/jpeg;base64,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"
                        alt=""
                      />
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
