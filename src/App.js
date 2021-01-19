import React, { useState } from 'react'
import { SearchContext, LoadingContext, ErrorContext } from './contexts'
import { Search } from './components/Search/Search'
import { Error } from './components/Error/Error'
import { Users } from './components/Users/Users'

const App = () => {
  const [users, setUsers] = useState({})
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div className="App">
      <SearchContext.Provider value={{ users, setUsers }}>
        <LoadingContext.Provider value={{ isLoading, setLoading }}>
          <ErrorContext.Provider value={{ error, setError }}>

            <Search />
            {users.users && (!error.length) && <Users />}
            {error && <Error />}

          </ErrorContext.Provider>
        </LoadingContext.Provider>
      </SearchContext.Provider>
    </div>
  )
}

export default App
