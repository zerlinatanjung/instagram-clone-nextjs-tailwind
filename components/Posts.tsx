import React from 'react'
import Post from './Post'

const posts = [
  {
    id: '123',
    username: 'zerlinatanjung',
    userImg:
      'https://scontent.fbdo2-1.fna.fbcdn.net/v/t39.30808-6/272868296_2553996868073503_7533612638628071323_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Bau7iezywHgAX-2WxiN&_nc_ht=scontent.fbdo2-1.fna&oh=00_AT8PG6b21ogkMcFsvTGDy2u2FjtD9rrA-3caxTl6bWjKCw&oe=62612CE6',
    img: 'https://scontent.fbdo2-1.fna.fbcdn.net/v/t39.30808-6/272868296_2553996868073503_7533612638628071323_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Bau7iezywHgAX-2WxiN&_nc_ht=scontent.fbdo2-1.fna&oh=00_AT8PG6b21ogkMcFsvTGDy2u2FjtD9rrA-3caxTl6bWjKCw&oe=62612CE6',
    caption: 'SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithm!',
  },
  {
    id: '123',
    username: 'zerlinatanjung',
    userImg:
      'https://scontent.fbdo2-1.fna.fbcdn.net/v/t39.30808-6/272868296_2553996868073503_7533612638628071323_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Bau7iezywHgAX-2WxiN&_nc_ht=scontent.fbdo2-1.fna&oh=00_AT8PG6b21ogkMcFsvTGDy2u2FjtD9rrA-3caxTl6bWjKCw&oe=62612CE6',
    img: 'https://scontent.fbdo2-1.fna.fbcdn.net/v/t39.30808-6/272868296_2553996868073503_7533612638628071323_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Bau7iezywHgAX-2WxiN&_nc_ht=scontent.fbdo2-1.fna&oh=00_AT8PG6b21ogkMcFsvTGDy2u2FjtD9rrA-3caxTl6bWjKCw&oe=62612CE6',
    caption: 'SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithm!',
  },
]

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts
