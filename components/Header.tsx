import Image from 'next/image'
import {
  SearchIcon,
  PlusIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  HomeIcon,
  PlusCircleIcon,
} from '@heroicons/react/outline'
function Header() {
  return (
    <div className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-5 flex max-w-6xl justify-between lg:mx-auto">
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
        <div className="max-w-xs">
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
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 cursor-pointer md:hidden" />
          <div className="navBtn relative">
            <PaperAirplaneIcon className="navBtn rotate-45 " />
            <div className="absolute -right-2 -top-1 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-red-600 text-xs text-white">
              7
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />

          <img
            src="https://scontent.fbdo2-1.fna.fbcdn.net/v/t39.30808-6/272868296_2553996868073503_7533612638628071323_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_W13BgAJ8IYAX_cAhzt&_nc_ht=scontent.fbdo2-1.fna&oh=00_AT-SdWCIM-9_33CfNjp_km41KdgX-8n3DZOCauqjyFzl_g&oe=625749A6"
            alt="profile picture"
            className="h-10 cursor-pointer rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
