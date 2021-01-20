import React, { useContext } from 'react'
import { SearchContext, PageContext } from '../../contexts'
import { User } from './User/User'
import { PaginationItem, Pagination } from '@material-ui/lab'
import { useStyles } from './styles'

export const Users = () => {
    const classes = useStyles()
    const search = useContext(SearchContext)
    const page = useContext(PageContext)
    const handleChange = (_, value) => page.setPage(value)

    return (
        <>
            {(search.users.users.length > 1)
                && <Pagination
                    onChange={handleChange}
                    page={page.page}
                    count={10}
                    style={{ placeContent: 'center' }}
                    renderItem={(item) => <PaginationItem {...item}
                        classes={{ selected: classes.selected }} />}
                />}
            <div className={classes.container}>
                {search.users.users.map(user => <User key={user.id} user={user} />)}
            </div>
        </>
    )
}
