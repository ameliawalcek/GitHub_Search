import React, { useState } from 'react'
import { SearchContext, LoadingContext, ErrorContext, PageContext } from './contexts'
import image from './assets/github-pages-logo-repository-fork-github-86eddab19cbc3ae293ada0fe0fb9e27d.png'
import { Search } from './components/Search/Search'
import { Error } from './components/Error/Error'
import { Users } from './components/Users/Users'
import Loading from './components/Loading/Loading'

const App = () => {
  const [users, setUsers] = useState({})
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)

  return (
    <div className="App">
      <SearchContext.Provider value={{ users, setUsers }}>
        <LoadingContext.Provider value={{ isLoading, setLoading }}>
          <ErrorContext.Provider value={{ error, setError }}>
            <PageContext.Provider value={{ page, setPage }}>
              <div className='heading'>
                <img className='header-img' src={image} alt='logo'/>
                <Search />
              </div>
              {users.users && (!error.length) && <Users />}
              {isLoading && <Loading />}
              {error && <Error />}
            </PageContext.Provider>
          </ErrorContext.Provider>
        </LoadingContext.Provider>
      </SearchContext.Provider>
    </div>
  )
}

export default App
