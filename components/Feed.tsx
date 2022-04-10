import Stories from './Stories'

function Feed() {
  return (
    <main className="max-auto grid grid-cols-1 md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3">
      <section className="cal-span-2">
        {/* Stories */}
        <Stories />
        {/* Posts */}
      </section>

      {/* Section*/}
      <section>
        {/* Mini profile */}
        {/* Suggestions */}
      </section>
    </main>
  )
}

export default Feed