import React from 'react'
import Post from './Post'

const DUMMY_DATA = [
  {
    id: '123',
    username: 'zerlinatanjung',
    userImg:
      'https://scontent.fbdo2-1.fna.fbcdn.net/v/t39.30808-6/272868296_2553996868073503_7533612638628071323_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_W13BgAJ8IYAX_cAhzt&_nc_ht=scontent.fbdo2-1.fna&oh=00_AT-SdWCIM-9_33CfNjp_km41KdgX-8n3DZOCauqjyFzl_g&oe=625749A6',
  },
]

function Posts() {
  return (
    <div>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Posts
