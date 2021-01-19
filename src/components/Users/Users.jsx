import React, {useContext} from 'react'
import { LoadingContext, SearchContext } from '../../contexts'
import { User } from './User/User'

export const Users = () => {
    const search = useContext(SearchContext)
    console.log(search.users.users)

    return (
        <div>
            {search.users.users.map(user => <User key={user.id} user={user}/>)}
        </div>
    )
}
