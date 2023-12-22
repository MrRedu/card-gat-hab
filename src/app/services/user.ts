/* eslint-disable camelcase */


export const getUserByUsername = async ({ username }, { signal }) => {
  const URL = `https://api.github.com/users/${username}`

  try {
    const response = await fetch(URL, { signal })
    const data = await response.json()
    const {
      id,
      login,
      name,
      created_at,
      avatar_url,
      html_url,
      location,
      followers,
      following,
    } = data
    // TODO: destructuring data

    return {
      id,
      login,
      name,
      memberSince: created_at,
      avatar: avatar_url,
      ghUrl: html_url,
      location,
      followers,
      following,
    }
  } catch (error) {
    throw new Error(`Something went wrong: ${error.message}`)
  }
}
