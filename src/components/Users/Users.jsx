import React, { useContext } from 'react'
import { SearchContext, PageContext } from '../../contexts'
import { User } from './User/User'
import './style.css'
import Pagination from '@material-ui/lab/Pagination';
import { PaginationItem } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core'

export const Users = () => {
    const search = useContext(SearchContext)
    const page = useContext(PageContext)

    const handleChange = (_, value) => page.setPage(value)

    const useStyles = makeStyles((theme) => ({
        selected: {
            backgroundColor: 'transparent',
            color: 'rgba(81, 203, 238, 1)',
        },
    }),
    )

    const classes = useStyles()

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
            <div className='container'>
                {search.users.users.map(user => <User key={user.id} user={user} />)}
            </div>
        </>
    )
}
