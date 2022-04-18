import React from 'react'

function MiniProfile() {
  return (
    <div className="mt-14 ml-10 flex items-center justify-between">
      <img
        className="h-16 w-16 rounded-full border p-[2px]"
        src="https://scontent.fbdo2-1.fna.fbcdn.net/v/t39.30808-6/272868296_2553996868073503_7533612638628071323_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Bau7iezywHgAX-2WxiN&_nc_ht=scontent.fbdo2-1.fna&oh=00_AT8PG6b21ogkMcFsvTGDy2u2FjtD9rrA-3caxTl6bWjKCw&oe=62612CE6"
        alt=""
      />
      <div className="mx-4 flex-1">
        <h2 className="font-bold">zerlinatanjung</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button className="text-sm font-semibold text-blue-500">Sign Out</button>
    </div>
  )
}

export default MiniProfile
