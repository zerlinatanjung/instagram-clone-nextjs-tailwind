import { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'
import { ContextualCard } from '@faker-js/faker/helpers'

function Stories() {
  const [suggestions, setSuggestions] = useState<ContextualCard[]>([])
  useEffect(() => {
    const suggestions = [...Array(10)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))

    setSuggestions(suggestions)
  }, [])

  return (
    <div>
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
