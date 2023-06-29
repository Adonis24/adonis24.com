import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import Link from 'next/link'

const solutions = [
  {
    name: 'Insights',
    description: 'Measure actions your users take',
    href: '##',
  
  },
  {
    name: 'Automations',
    description: 'Create your own targeted content',
    href: '##',
  
  },
  {
    name: 'Reports',
    description: 'Keep track of your growth',
    href: '##',

  },
]

export default function AboutPopover() {
  return (
    <div className=" tw-fixed tw-top tw-w-full tw-max-w-sm tw-px-4">
      <Popover className="tw-relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'tw-text-opacity-90'}
                nav-link
                tw-group tw-inline-flex tw-items-center 
                tw-underline
                tw-rounded-md tw-bg-orange-700 tw-px-3 
                tw-py-2 tw-text-base tw-font-raleway
                 tw-text-black hover:tw-text-opacity-100 
                 focus:tw-outline-none focus-visible:tw-ring-2 
                 focus-visible:tw-ring-white focus-visible:tw-ring-opacity-75`}
            >
              <span>О компании</span>
              <ChevronDownIcon
                className={`${open ? '' : 'tw-text-opacity-70'}
                tw-ml-2 tw-h-5 tw-w-5 tw-text-green-700 tw-transition tw-duration-150 ease-in-out group-hover:tw-text-opacity-80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="tw-absolute tw-left tw-z-10 tw-mt-3 tw-w-screen tw-max-w-sm -translate-x-1/2 tw-transform tw-px-4 sm:px-0 tw-lg:max-w-3xl">
                <div className="tw-overflow-hidden tw-rounded-lg tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5">
                  <div className="tw-relative tw-grid tw-gap-8 tw-bg-white tw-p-7 tw-lg:grid-cols-2">
                   
                  </div>
                  <div className="tw-bg-gray-50 tw-p-4">
                    <a
                      href="##"
                      className="tw-flow-root tw-rounded-md tw-px-2 tw-py-2 transition duration-150 ease-in-out hover:tw-bg-gray-100 focus:tw-outline-none focus-visible:tw-ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <span className="tw-flex tw-items-center">
                        <span className="tw-text-sm tw-font-medium tw-text-gray-900">
                         <Link href="/about">
                            О компании
                         </Link>
                        </span>
                      </span>
                      <span className="tw-block tw-text-sm tw-text-gray-500">
                        Start integrating products and tools
                      </span>
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}



// {solutions.map((item) => (
//   <a
//     key={item.name}
//     href={item.href}
//     className="tw-m-3 tw-flex tw-items-center tw-rounded-lg tw-p-2 tw-transition duration-150 ease-in-out hover:tw-bg-gray-50 focus:tw-outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
//   >
//     <div className="tw-flex tw-h-10 tw-w-10 tw-shrink-0 tw-items-center tw-justify-center tw-text-white sm:h-12 sm:w-12">
//       <item.icon aria-hidden="true" />
//     </div>
//     <div className="tw-ml-4">
//       <p className="tw-text-sm tw-font-medium tw-text-gray-900">
//         {item.name}
//       </p>
//       <p className="tw-text-sm tw-text-gray-500">
//         {item.description}
//       </p>
//     </div>
//   </a>
// ))}