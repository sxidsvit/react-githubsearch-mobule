import React, { useContext } from 'react'
import { Card } from './Card'
import { GithubContext } from '../context/GitHub/githubContext'

export const Results = () => {
  const { loading, repos } = useContext(GithubContext)

  return (
    <div className="results">
      {loading
        ? <p className="text-center" >Загрузка ...</p>
        : repos.map((repo, idx) => (
          <Card repo={repo} key={idx} />
        ))
      }
    </div>
  )
}
