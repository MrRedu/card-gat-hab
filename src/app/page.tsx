'use client'

import { useEffect, useState } from 'react'
import { Card } from './components/card/Card'
import { Loader } from './components/ui/loading/Loading'
import { useUser } from './hooks/useUser'

const HomePage = () => {
  const [query, setQuery] = useState('')
  const { user, error, loading, getUser } = useUser()
  const [signal, setSignal] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    setSignal(signal)

    getUser({ query: 'MrRedu' }, { signal })

    return () => {
      controller.abort()
    }
  }, [])

  const handleChange = (e: React.ChangeEvent) => {
    e.preventDefault()

    const { value } = e.target as HTMLInputElement
    setQuery(value)
  }

  const handleChangeSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    getUser({ query }, { signal })
  }

  return (
    <>
      <form
        action=""
        onSubmit={handleChangeSubmit}
        className="flex gap-2 bg-slate-600 p-4"
        autoComplete="off"
      >
        <input
          type="text"
          placeholder="MrRedu"
          onChange={handleChange}
          value={query}
          name="query"
        />
        <button type="submit" className="bg-slate-500 p-2 rounded-sm">
          Search
        </button>
      </form>
      {/* FIXME: Error is always set */}
      {/* {error && <p>{error.message}</p>} */}
      {loading ? (
        <Loader />
      ) : (
        <Card
          login={user.login}
          name={user.name}
          avatar={user.avatar}
          ghUrl={user.ghUrl}
          location={user.location}
          memberSince={user.memberSince}
          followers={user.followers}
          following={user.following}
        />
      )}
    </>
  )
}

export default HomePage
