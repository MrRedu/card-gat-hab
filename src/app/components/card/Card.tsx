import Image from 'next/image'

type CardProps = {
  login: string
  name: string
  avatar: string
  ghUrl: string
  location: string
  memberSince: string
  followers: number
  following: number
}

export const Card = ({
  login,
  name,
  avatar,
  ghUrl,
  location,
  memberSince,
  followers,
  following,
}: CardProps) => {
  return (
    <>
      <div className="flex flex-col bg-indigo-600 mx-auto p-4">
        <h2 className="text-3xl font-bold">{login}</h2>
        <span>{name}</span>
        <Image
          src={avatar}
          alt={`${login} avatar`}
          className="rounded-full w-32 h-32"
          width={128}
          height={128}
        />
        <a
          href={ghUrl}
          target="_blank"
          rel="noreferrer"
          className="hover:text-cyan-400"
        >
          {login} GitHub
        </a>
        <p>{location}</p>
        <p>Member since: {memberSince}</p>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
      </div>
    </>
  )
}
