import { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'
import { ContextualCard } from '@faker-js/faker/helpers'
import Story from './Story'

type Suggestion = {
  id: number
} & ContextualCard

function Stories() {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])
  useEffect(() => {
    const suggestions = [...Array(10)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))

    setSuggestions(suggestions)
  }, [])

  return (
    <div className="mt-8 flex space-x-2 overflow-x-scroll rounded-sm border border-gray-200 bg-white p-6">
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
      {/* Stories */}
      {/* Stories */}
      {/* Stories */}
      {/* Stories */}
      {/* Stories */}
      {/* Stories */}
      {/* Stories */}
    </div>
  )
}

export default Stories
