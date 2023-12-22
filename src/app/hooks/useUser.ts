import { useState } from 'react'
import { getUserByUsername } from '../services/user'

export function useUser() {
  const [user, setUser] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const getUser = async ({ query }, { signal }) => {
    if (query.length < 3) return

    try {
      setLoading(true)
      const userByUsername = await getUserByUsername(
        { username: query },
        { signal }
      )
      setUser(userByUsername)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  // useEffect(() => {
  //   const controller = new AbortController()
  //   getUser({ query }, { signal: controller.signal })

  //   return () => {
  //     controller.abort()
  //   }
  // }, [query])

  return {
    user,
    error,
    loading,
    getUser,
  }
}
