import React, { useContext } from 'react'
import { PaginationItem, Pagination } from '@material-ui/lab'
import { SearchContext, PageContext } from '../../contexts'
import { useStyles } from './styles'
import { User } from './User/User'

export const Users = () => {
    const classes = useStyles()
    const { users } = useContext(SearchContext)
    const { page, setPage } = useContext(PageContext)
    const handleChange = (_, value) => setPage(value)

    return (
        <>
            {(users.users.length > 1)
                && <Pagination
                    onChange={handleChange}
                    page={page}
                    count={10}
                    style={{ placeContent: 'center' }}
                    renderItem={(item) => <PaginationItem {...item}
                        classes={{ selected: classes.selected }} />}
                />}
            <div className={classes.container}>
                {users.users.map(user => <User key={user.id} user={user} />)}
            </div>
        </>
    )
}
