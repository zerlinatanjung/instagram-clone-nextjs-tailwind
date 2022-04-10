import Image from 'next/image'
import {
  SearchIcon,
  PlusIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
function Header() {
  return (
    <div>
      <div className="flex max-w-6xl justify-between">
        {/* Left */}
        <div className="relative hidden w-24 cursor-pointer lg:inline-grid">
          <Image
            src="https://Links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative w-10 flex-shrink-0 cursor-pointer lg:hidden">
          <Image
            src="https://Links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle - Search input field */}
        <div className="relative mt-1 rounded-md p-3">
          <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input
            className="block w-full rounded-md border-gray-300 bg-gray-50 pl-10 focus:border-black focus:ring-black sm:text-sm"
            type="text"
            placeholder="Search"
          />
        </div>

        {/* Right */}
      </div>
    </div>
  )
}

export default Header
