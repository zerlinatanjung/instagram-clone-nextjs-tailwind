import React from 'react'

type StoryProps = {
  img: string
  username: string
}

function Story({ img, username }: StoryProps) {
  return (
    <div>
      <img src={img} alt="" />
      <p>{username}</p>
    </div>
  )
}

export default Story
