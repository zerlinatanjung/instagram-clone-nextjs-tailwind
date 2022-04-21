import { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'
import { ContextualCard } from '@faker-js/faker/helpers'
import Story from './Story'
import { useSession } from 'next-auth/react'

type Suggestion = {
  id: number
} & ContextualCard

function Stories() {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])
  const { data: session } = useSession()

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))

    setSuggestions(suggestions)
  }, [])

  return (
    <div className="mt-8 flex space-x-2 overflow-x-scroll rounded-sm border border-gray-200 bg-white p-6 scrollbar-thin">
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}

      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  )
}

export default Stories
