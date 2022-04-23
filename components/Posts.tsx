import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import Post from './Post'

interface Post {
  id: string
  image: string
  caption: string
  username: string
  profileImg: string
}

function Posts() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        (snapshot) => {
          setPosts(
            snapshot.docs
              .filter((x) => (x.data() as Post).image !== undefined)
              .map(
                (x) =>
                  ({
                    ...x.data(),
                    id: x.id,
                  } as Post)
              )
          )
        }
      ),
    [db]
  )

  return (
    <div>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            username={post.username}
            userImg={post.profileImg}
            img={post.image}
            caption={post.caption}
          />
        )
      })}
    </div>
  )
}

export default Posts
